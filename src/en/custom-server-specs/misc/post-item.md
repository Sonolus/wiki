# `PostItem`

`PostItem` provides information of a post.

## Syntax

```ts
type PostItem = {
    name: string
    source?: string
    version: 1
    title: string
    time: number
    author: string
    tags: Tag[]
    thumbnail?: SRL
}
```

### `name`

Unique name which identifies the post.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

```json
{
    "name": "bandori-info",
    "version": 1,
    "title": "Bandori Information",
    "time": 1640995200000,
    "author": "BanG Dream! Girls Band Party!",
    "tags": [
        // ...
    ],
    "thumbnail": {
        // ...
    }
}
```
