import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

console.log('trimming files...')

const walk = (path) =>
    readdirSync(path, { withFileTypes: true }).flatMap((dirent) =>
        dirent.isDirectory()
            ? walk(`${path}/${dirent.name}`)
            : dirent.name.endsWith('.md')
            ? [`${path}/${dirent.name}`]
            : [],
    )

const findByHead = (str, head, tail) => {
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

const findByTail = (str, head, tail) => {
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

const findAll = (str, head, tail) => {
    const start = str.indexOf(head)
    if (start === -1) return []

    const end = str.indexOf(tail, start)
    if (end === -1) throw 'Not found'

    return [
        str.slice(start + head.length, end),
        ...findAll(str.slice(end + tail.length), head, tail),
    ]
}

const replaceByIndex = (str, start, end, replace) =>
    `${str.slice(0, start)}${replace}${str.slice(end)}`

const replaceBySearch = (str, search, replace) => {
    const result = str.replace(search, replace)
    if (result === str) throw 'Not found'

    return result
}

const split = (filename) => {
    const index = filename.lastIndexOf('.')

    return {
        path: filename.slice(0, index),
        hash: filename.slice(index + 1),
    }
}

const injectFallback = (srcPath, outPath) => {
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

        const html = readFileSync(`./.vitepress/dist/${locale}${path.slice(8, -3)}.html`, 'utf8')

        const { start, end, result: oldFilename } = findByTail(html, 'href="/assets/', '.lean.js"')
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

        const out = replaceByIndex(html, start, end, `href="/assets/${filename}_fallback.lean.js"`)
        writeFileSync(`./.vitepress/dist/${locale}${path.slice(8, -3)}.html`, out)
    }

    if (needFallback) {
        injectFallback(`${filename}.js`, `${filename}_fallback.js`)
        injectFallback(`${filename}.lean.js`, `${filename}_fallback.lean.js`)
    }
}

writeFileSync(metadataPath, metadata)

writeFileSync('./.vitepress/dist/hashmap.json', hashmap)
