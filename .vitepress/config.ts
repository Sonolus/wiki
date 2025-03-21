import { existsSync, readdirSync, readFileSync } from 'node:fs'
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
})
