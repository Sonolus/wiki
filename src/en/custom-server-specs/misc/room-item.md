# `RoomItem`

`RoomItem` provides information of a room.

## Syntax

```ts
type RoomItem = {
    name: string
    title: string
    subtitle: string
    master: string
    tags: Tag[]
    cover?: SRL
    bgm?: SRL
    preview?: SRL
}
```

### `name`

Unique name which identifies the room.

## Examples

```json
{
    "name": "...",
    "title": "Let's Play",
    "subtitle": "Yes! BanG_Dream!",
    "master": "Player#0000",
    "tags": [
        // ...
    ],
    "cover": {
        // ...
    },
    "bgm": {
        // ...
    },
    "preview": {
        // ...
    }
}
```
