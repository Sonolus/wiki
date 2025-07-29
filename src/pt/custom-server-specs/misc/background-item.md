# `BackgroundItem`

`BackgroundItem` fornece informações de um plano de fundo.

## Sintaxe

```ts
type BackgroundItem = {
    name: string
    source?: string
    version: 2
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    thumbnail: SRL
    data: SRL
    image: SRL
    configuration: SRL
}
```

### `name`

Nome exclusivo que identifica o fundo.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

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
