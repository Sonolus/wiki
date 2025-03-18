# `SkinItem`

`SkinItem` provides information of a skin.

## Syntax

```ts
type SkinItem = {
    name: string
    source?: string
    version: 4
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    texture: SRL
}
```

### `name`

Unique name which identifies the skin.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

```json
{
    "name": "bandori-n00-f00-l00",
    "version": 4,
    "title": "TYPE1 / TYPE1 / レーンスキン00",
    "subtitle": "BanG Dream! Girls Band Party!",
    "author": "BanG Dream! Girls Band Party!",
    "tags": [
        // ...
    ],
    "thumbnail": {
        // ...
    },
    "data": {
        // ...
    },
    "texture": {
        // ...
    }
}
```
