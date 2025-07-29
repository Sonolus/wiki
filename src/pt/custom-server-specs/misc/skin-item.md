# `SkinItem`

`SkinItem` fornece informações de uma skin.

## Sintaxe

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

Nome único que identifica a pele.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

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
