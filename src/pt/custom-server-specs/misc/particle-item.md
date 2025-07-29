# `ParticleItem`

`ParticleItem` fornece informações de uma partícula.

## Sintaxe

```ts
type ParticleItem = {
    name: string
    source?: string
    version: 3
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

Nome único que identifica a partícula.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

## Exemplos

```json
{
    "name": "bandori-1",
    "version": 3,
    "title": "Effect Type 1",
    "subtitle": "BanG Dream! Girls Band Party!",
    "author": "Sonolus",
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
