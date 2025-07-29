# `PlaylistItem`

`PlaylistItem` fornece informações de uma playlist.

## Sintaxe

```ts
type PlaylistItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    levels: LevelItem[]
    thumbnail?: SRL
}
```

### `name`

Nome exclusivo que identifica a playlist.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

```json
{
    "name": "bandori-1-expert",
    "version": 1,
    "title": "Yes! BanG_Dream!",
    "subtitle": "Poppin'Party",
    "author": "BanG Dream! Girls Band Party!",
    "tags": [
        // ...
    ],
    "levels": [
        // ...
    ],
    "thumbnail": {
        // ...
    }
}
```
