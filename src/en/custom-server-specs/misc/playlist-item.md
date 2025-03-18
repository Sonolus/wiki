# `PlaylistItem`

`PlaylistItem` provides information of a playlist.

## Syntax

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

Unique name which identifies the playlist.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

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
