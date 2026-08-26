# `RoomItem`

`RoomItem` fornece informações de um quarto.

## Sintaxe

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

Nome único que identifica a sala.

## Exemplos

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
