# `PostItem`

`PostItem` fornece informações de uma postagem.

## Sintaxe

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

Nome exclusivo que identifica a postagem.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

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
