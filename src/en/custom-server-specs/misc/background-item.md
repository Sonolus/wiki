# `BackgroundItem`

`BackgroundItem` provides information of a background.

## Syntax

```ts
type BackgroundItem = {
    name: string
    source?: string
    version: 2
    title: string
    subtitle: string
    author: string
    authorUser?: UserItem
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    image: SRL
    configuration: SRL
}
```

### `name`

Unique name which identifies the background.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

```json
{
    "name": "bandori-live-00",
    "version": 2,
    "title": "デフォルト背景",
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
    "image": {
        // ...
    },
    "configuration": {
        // ...
    }
}
```
