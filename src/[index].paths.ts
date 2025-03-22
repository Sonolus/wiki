import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { home } from '../.vitepress/home'

export default {
    paths() {
        const baseFeatures = home.map((path) => ({
            path,
            baseConfig: JSON.parse(readFileSync(`./src/en/${path}/config.json`, 'utf8')),
        }))

        return readdirSync('./src', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory() && dirent.name !== 'public')
            .map(({ name: locale }) => {
                const config = JSON.parse(readFileSync(`./src/${locale}/config.json`, 'utf8'))

                return {
                    params: { index: locale === 'en' ? 'index' : `${locale}/index` },
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
                }
            })
    },
}
