# `EngineItem`

`EngineItem` provides information of a engine.

## Syntax

```ts
type EngineItem = {
    name: string
    source?: string
    version: 13
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    skin: SkinItem
    background: BackgroundItem
    effect: EffectItem
    particle: ParticleItem
    thumbnail: SRL
    playData: SRL
    watchData: SRL
    previewData: SRL
    tutorialData: SRL
    rom?: SRL
    configuration: SRL
}
```

### `name`

Unique name which identifies the engine.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

### `skin` / `background` / `effect` / `particle`

Default items to use with the engine.

## Examples

```json
{
    "name": "bandori",
    "version": 13,
    "title": "BanG Dream!",
    "subtitle": "BanG Dream! Girls Band Party!",
    "author": "Burrito",
    "tags": [
        // ...
    ],
    "skin": {
        // ...
    },
    "background": {
        // ...
    },
    "effect": {
        // ...
    },
    "particle": {
        // ...
    },
    "thumbnail": {
        // ...
    },
    "playData": {
        // ...
    },
    "previewData": {
        // ...
    },
    "tutorialData": {
        // ...
    },
    "configuration": {
        // ...
    }
}
```
