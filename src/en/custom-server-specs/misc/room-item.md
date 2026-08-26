# `RoomItem`

`RoomItem` provides information of a room.

## Syntax

```ts
type RoomItem = {
    name: string
    title: Text | (string & {})
    subtitle: Text | (string & {})
    master: string
    masterUser?: UserItem
    tags: Tag[]
    cover?: Srl
    bgm?: Srl
    preview?: Srl
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
