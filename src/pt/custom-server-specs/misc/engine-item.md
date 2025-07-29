# `EngineItem`

`EngineItem` fornece informações de um motor.

## Sintaxe

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

Nome exclusivo que identifica o mecanismo.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

### `skin` / `background` / `effect` / `particle`

Itens padrão para usar com o mecanismo.

## Exemplos

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
