import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { version } from '../version'

export default {
    extends: DefaultTheme,

    enhanceApp({ app }) {
        app.config.globalProperties.version = version
    },
} satisfies Theme
