import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createMarkdownRenderer, DefaultTheme, defineConfig, LocaleConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

const renderer = await createMarkdownRenderer('src')

const renderTitle = (markdown: string) => {
    const html = renderer
        .render(
            markdown
                .split('\n')
                .find((line) => line.startsWith('# '))!
                .slice(2),
        )
        .trim()

    return html.startsWith('<p>') && html.endsWith('</p>') ? html.slice(3, -4) : html
}

const locales = readdirSync('./src', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== 'public')
    .map(({ name }) => ({
        locale: name,
        config: JSON.parse(readFileSync(`./src/${name}/config.json`, 'utf8')),
    }))

const baseConfig = locales.find(({ locale }) => locale === 'en')!.config

const baseNav = Object.entries(nav).map(([key, paths]) => ({
    key,
    paths: paths.map((path) => ({
        path,
        baseConfig: JSON.parse(readFileSync(`./src/en/${path}/config.json`, 'utf8')),
    })),
}))

const baseSidebar = Object.fromEntries(
    Object.entries(sidebar).map(([path, sections]) => {
        const config = JSON.parse(readFileSync(`./src/en/${path}/config.json`, 'utf8'))

        return [
            path,
            Object.fromEntries(
                Object.entries(sections).map(([key, subpaths]) => [
                    key,
                    {
                        text: config[key],
                        items: subpaths.map((subpath) =>
                            renderTitle(
                                readFileSync(`./src/en/${path}${subpath || '/index'}.md`, 'utf8'),
                            ),
                        ),
                    },
                ]),
            ),
        ]
    }),
)

export default defineConfig({
    srcDir: 'src',

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
        [
            'link',
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        ],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000020' }],
        ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
        ['meta', { name: 'theme-color', content: '#000020' }],
        ['meta', { property: 'og:image', content: 'https://sonolus.com/icon.png' }],
    ],

    cleanUrls: true,
    rewrites: {
        'en/:slug*': ':slug*',
    },

    appearance: 'dark',

    themeConfig: {
        search: {
            provider: 'local',
            options: {
                locales: Object.fromEntries(
                    locales.map(({ locale, config }) => [
                        locale === 'en' ? 'root' : locale,
                        {
                            translations: {
                                button: {
                                    buttonText: config.search ?? baseConfig.search,
                                    buttonAriaLabel: config.search ?? baseConfig.search,
                                },
                                modal: {
                                    noResultsText:
                                        config.searchNoResults ?? baseConfig.searchNoResults,
                                    footer: {
                                        navigateText:
                                            config.searchNavigate ?? baseConfig.searchNavigate,
                                        selectText: config.searchSelect ?? baseConfig.searchSelect,
                                        closeText: config.searchClose ?? baseConfig.searchClose,
                                    },
                                },
                            },
                        } satisfies Pick<DefaultTheme.LocalSearchOptions, 'translations'>,
                    ]),
                ),
            },
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/Sonolus/wiki' }],
    },

    locales: Object.fromEntries(
        locales.map(({ locale, config }) => [
            locale === 'en' ? 'root' : locale,
            {
                label: config.name,
                lang: config.lang,

                title: config.title,
                description: config.description,

                themeConfig: {
                    darkModeSwitchLabel: config.theme ?? baseConfig.theme,
                    lightModeSwitchTitle: config.darkTheme ?? baseConfig.darkTheme,
                    darkModeSwitchTitle: config.lightTheme ?? baseConfig.lightTheme,

                    sidebarMenuLabel: config.menu ?? baseConfig.menu,

                    outline: {
                        label: config.onThisPage ?? baseConfig.onThisPage,
                    },

                    docFooter: {
                        prev: config.previousPage ?? baseConfig.previousPage,
                        next: config.nextPage ?? baseConfig.nextPage,
                    },

                    nav: baseNav.map(({ key, paths }) => ({
                        text: config[key],
                        items: paths.map(({ path, baseConfig }) => {
                            const config =
                                locale !== 'en' && existsSync(`./src/${locale}/${path}/config.json`)
                                    ? JSON.parse(
                                          readFileSync(
                                              `./src/${locale}/${path}/config.json`,
                                              'utf8',
                                          ),
                                      )
                                    : baseConfig

                            return {
                                text: config.title,
                                link: locale === 'en' ? `/${path}` : `/${locale}/${path}`,
                            }
                        }),
                    })),

                    sidebar: Object.fromEntries(
                        Object.entries(sidebar).map(([path, sections]) => {
                            const config =
                                locale !== 'en' && existsSync(`./src/${locale}/${path}/config.json`)
                                    ? JSON.parse(
                                          readFileSync(
                                              `./src/${locale}/${path}/config.json`,
                                              'utf8',
                                          ),
                                      )
                                    : {}

                            return [
                                locale === 'en' ? `/${path}` : `/${locale}/${path}`,
                                Object.entries(sections).map(([key, subpaths]) => ({
                                    text: config[key] ?? baseSidebar[path][key].text,
                                    collapsed: false,
                                    items: subpaths.map((subpath, index) => ({
                                        text:
                                            locale === 'en' ||
                                            !existsSync(
                                                `./src/${locale}/${path}${subpath || '/index'}.md`,
                                            )
                                                ? baseSidebar[path][key].items[index]
                                                : renderTitle(
                                                      readFileSync(
                                                          `./src/${locale}/${path}${
                                                              subpath || '/index'
                                                          }.md`,
                                                          'utf8',
                                                      ),
                                                  ),
                                        link:
                                            locale === 'en'
                                                ? `/${path}${subpath || '/'}`
                                                : `/${locale}/${path}${subpath || '/'}`,
                                    })),
                                })),
                            ]
                        }),
                    ),
                },
            } satisfies LocaleConfig<DefaultTheme.Config>[string],
        ]),
    ),

    metaChunk: true,

    buildEnd() {
        console.log('trimming files...')

        const frameworkPath = `./.vitepress/dist/assets/chunks/framework.${
            findByHead(
                readFileSync('./.vitepress/dist/index.html', 'utf8'),
                'href="/assets/chunks/framework.',
                '.js"',
            ).result
        }.js`
        let framework = readFileSync(frameworkPath, 'utf8')
        const {
            start: frameworkStart,
            end: frameworkEnd,
            result: frameworkResult,
        } = findByTail(framework, '=`${', '}.js`')
        const names = findAll(`{${frameworkResult}}`, '{', '}')
        framework = replaceByIndex(
            framework,
            frameworkStart,
            frameworkEnd,
            `=\`\${${names[0]}}assets/\${${names[2]}.endsWith('_fallback')?${names[1]}.slice(${names[1]}.indexOf('_')+1):${names[1]}}.\${${names[2]}}.js\``,
        )
        writeFileSync(frameworkPath, framework)

        const metadataPath = `./.vitepress/dist/assets/chunks/metadata.${
            findByTail(
                readFileSync('./.vitepress/dist/index.html', 'utf8'),
                'src="/assets/chunks/metadata.',
                '.js"',
            ).result
        }.js`
        let metadata = readFileSync(metadataPath, 'utf8')

        let hashmap = readFileSync('./.vitepress/dist/hashmap.json', 'utf8')

        const locales = readdirSync('./src', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory() && !['public', 'en'].includes(dirent.name))
            .map(({ name }) => name)

        const paths = walk('./src/en')

        for (const path of paths) {
            const html = readFileSync(`./.vitepress/dist${path.slice(8, -3)}.html`, 'utf8')

            const { result: filename } = findByTail(html, 'href="/assets/', '.lean.js"')
            const { hash } = split(filename)

            let needFallback = false

            for (const locale of locales) {
                if (existsSync(`./src/${locale}${path.slice(8)}`)) continue
                needFallback = true

                const html = readFileSync(
                    `./.vitepress/dist/${locale}${path.slice(8, -3)}.html`,
                    'utf8',
                )

                const {
                    start,
                    end,
                    result: oldFilename,
                } = findByTail(html, 'href="/assets/', '.lean.js"')
                const { path: oldPath, hash: oldHash } = split(oldFilename)

                metadata = replaceBySearch(
                    metadata,
                    `\\"${oldPath}\\":\\"${oldHash}\\"`,
                    `\\"${oldPath}\\":\\"${hash}_fallback\\"`,
                )

                hashmap = replaceBySearch(
                    hashmap,
                    `"${oldPath}":"${oldHash}"`,
                    `"${oldPath}":"${hash}_fallback"`,
                )

                rmSync(`./.vitepress/dist/assets/${oldFilename}.js`)
                rmSync(`./.vitepress/dist/assets/${oldFilename}.lean.js`)

                const out = replaceByIndex(
                    html,
                    start,
                    end,
                    `href="/assets/${filename}_fallback.lean.js"`,
                )
                writeFileSync(`./.vitepress/dist/${locale}${path.slice(8, -3)}.html`, out)
            }

            if (needFallback) {
                injectFallback(`${filename}.js`, `${filename}_fallback.js`)
                injectFallback(`${filename}.lean.js`, `${filename}_fallback.lean.js`)
            }
        }

        writeFileSync(metadataPath, metadata)

        writeFileSync('./.vitepress/dist/hashmap.json', hashmap)
    },
})

const walk = (path: string): string[] =>
    readdirSync(path, { withFileTypes: true }).flatMap((dirent) =>
        dirent.isDirectory()
            ? walk(`${path}/${dirent.name}`)
            : dirent.name.endsWith('.md')
            ? [`${path}/${dirent.name}`]
            : [],
    )

const findByHead = (str: string, head: string, tail: string) => {
    const start = str.indexOf(head)
    if (start === -1) throw 'Not found'

    const end = str.indexOf(tail, start)
    if (end === -1) throw 'Not found'

    return {
        start,
        end: end + tail.length,
        result: str.slice(start + head.length, end),
    }
}

const findByTail = (str: string, head: string, tail: string) => {
    const end = str.indexOf(tail)
    if (end === -1) throw 'Not found'

    const start = str.lastIndexOf(head, end)
    if (start === -1) throw 'Not found'

    return {
        start,
        end: end + tail.length,
        result: str.slice(start + head.length, end),
    }
}

const findAll = (str: string, head: string, tail: string): string[] => {
    const start = str.indexOf(head)
    if (start === -1) return []

    const end = str.indexOf(tail, start)
    if (end === -1) throw 'Not found'

    return [
        str.slice(start + head.length, end),
        ...findAll(str.slice(end + tail.length), head, tail),
    ]
}

const replaceByIndex = (str: string, start: number, end: number, replace: string) =>
    `${str.slice(0, start)}${replace}${str.slice(end)}`

const replaceBySearch = (str: string, search: string, replace: string) => {
    const result = str.replace(search, replace)
    if (result === str) throw 'Not found'

    return result
}

const split = (filename: string) => {
    const index = filename.lastIndexOf('.')

    return {
        path: filename.slice(0, index),
        hash: filename.slice(index + 1),
    }
}

const injectFallback = (srcPath: string, outPath: string) => {
    const src = readFileSync(`./.vitepress/dist/assets/${srcPath}`, 'utf8')

    const { result: name } = findByTail(src, 'const ', '=JSON.parse(')

    const index = src.indexOf(';function ')
    if (index === -1) throw 'Not found'

    let out = replaceByIndex(
        src,
        index,
        index,
        `;${name}.relativePath=window.location.pathname.split('/')[1]+'/'+${name}.relativePath`,
    )
    out = replaceBySearch(out, '={name:"', `={name:window.location.pathname.split('/')[1]+"/`)
    writeFileSync(`./.vitepress/dist/assets/${outPath}`, out)
}
