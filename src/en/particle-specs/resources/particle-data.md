# Particle Data

Particle data is used by Sonolus app to drive a particle's rendering.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type ParticleData = {
    width: number
    height: number
    interpolation: boolean
    sprites: ParticleDataSprite[]
    effects: ParticleDataEffect[]
}
```

### `width`

Width of particle texture.

### `height`

Height of particle texture.

### `interpolation`

It is recommended to use `false` for pixel art styled particles to preserve crisp edges, and `true` otherwise.

## Examples

```json
{
    "width": 2048,
    "height": 2048,
    "interpolation": true,
    "sprites": [
        // ...
    ],
    "effects": [
        // ...
    ]
}
```
