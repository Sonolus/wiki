# `RoomItem`

`RoomItem` fornece informações de um quarto.

## Sintaxe

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
