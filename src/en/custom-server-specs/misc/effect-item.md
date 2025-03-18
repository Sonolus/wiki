# `EffectItem`

`EffectItem` provides information of a effect.

## Syntax

```ts
type EffectItem = {
    name: string
    source?: string
    version: 5
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    audio: SRL
}
```

### `name`

Unique name which identifies the effect.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

```json
{
    "name": "bandori-00",
    "version": 5,
    "title": "SEスキン00",
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
    "audio": {
        // ...
    }
}
```
