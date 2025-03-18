# `ParticleItem`

`ParticleItem` provides information of a particle.

## Syntax

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

Unique name which identifies the particle.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

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
