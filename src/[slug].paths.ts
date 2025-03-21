import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { home } from '../.vitepress/home'

const walk = (
    path: string,
): {
    path: string
    content: string
}[] =>
    readdirSync(path, { withFileTypes: true }).flatMap((dirent) =>
        dirent.isDirectory()
            ? walk(`${path}/${dirent.name}`)
            : dirent.name.endsWith('.md')
            ? [
                  {
                      path: `${path}/${dirent.name}`,
                      content: readFileSync(`${path}/${dirent.name}`, 'utf8'),
                  },
              ]
            : [],
    )

export default {
    paths() {
        const files = walk('./src/en')

        const baseFeatures = home.map((path) => ({
            path,
            baseConfig: JSON.parse(readFileSync(`./src/en/${path}/config.json`, 'utf8')),
        }))

        return readdirSync('./src', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory() && dirent.name !== 'public')
            .flatMap(({ name: locale }) => {
                const config = JSON.parse(readFileSync(`./src/${locale}/config.json`, 'utf8'))

                return [
                    {
                        params: { slug: locale === 'en' ? 'index' : `${locale}/index` },
                        content: [
                            '---',
                            JSON.stringify({
                                layout: 'home',

                                hero: {
                                    text: config.title,
                                    tagline: config.description,
                                },

                                features: baseFeatures.map(({ path, baseConfig }) => {
                                    const config =
                                        locale !== 'en' &&
                                        existsSync(`./src/${locale}/${path}/config.json`)
                                            ? JSON.parse(
                                                  readFileSync(
                                                      `./src/${locale}/${path}/config.json`,
                                                      'utf8',
                                                  ),
                                              )
                                            : baseConfig

                                    return {
                                        title: config.title,
                                        details: config.description,
                                        link: locale === 'en' ? `/${path}` : `/${locale}/${path}`,
                                    }
                                }),
                            }),
                            '---',
                        ].join('\n'),
                    },

                    ...(locale === 'en'
                        ? []
                        : files
                              .filter(({ path }) => !existsSync(`./src/${locale}${path.slice(8)}`))
                              .map(({ path, content }) => ({
                                  params: { slug: `${locale}${path.slice(8, -3)}` },
                                  content,
                              }))),
                ]
            })
    },
}
