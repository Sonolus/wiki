# `ReplayItem`

`ReplayItem` fornece informações de uma repetição.

## Sintaxe

```ts
type ReplayItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    level: LevelItem
    data: SRL
    configuration: SRL
}
```

### `name`

Nome exclusivo que identifica o replay.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

```json
{
    "name": "...",
    "version": 1,
    "title": "FC / 987654321",
    "subtitle": "432 / 1 / 0 / 0",
    "author": "Player#0000",
    "tags": [
        // ...
    ],
    "level": {
        // ...
    },
    "data": {
        // ...
    },
    "configuration": {
        // ...
    }
}
```
