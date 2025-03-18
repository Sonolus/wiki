# Particle Data Effect

Particle data effect is used by Sonolus app to drive a particle effect's rendering.

## Syntax

```ts
type ParticleDataEffect = {
    name: ParticleEffectName | (string & {})
    transform: ParticleDataTransform
    groups: ParticleDataGroup[]
}

type ParticleDataTransform = Record<
    `${'x' | 'y'}${1 | 2 | 3 | 4}`,
    Partial<
        Record<
            | 'c'
            | `${'x' | 'y'}${1 | 2 | 3 | 4}`
            | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`,
            number
        >
    >
>

type ParticleDataGroup = {
    count: number
    particles: ParticleDataGroupParticle[]
}

type ParticleDataGroupParticle = {
    sprite: number
    color: string
    start: number
    duration: number
    x: ParticleDataGroupParticleProperty
    y: ParticleDataGroupParticleProperty
    w: ParticleDataGroupParticleProperty
    h: ParticleDataGroupParticleProperty
    r: ParticleDataGroupParticleProperty
    a: ParticleDataGroupParticleProperty
}

type ParticleDataGroupParticleProperty = {
    from?: ParticleDataGroupParticlePropertyExpression
    to?: ParticleDataGroupParticlePropertyExpression
    ease?:
        | 'linear'
        | `${'in' | 'out' | 'inOut' | 'outIn'}${
              | 'Sine'
              | 'Quad'
              | 'Cubic'
              | 'Quart'
              | 'Quint'
              | 'Expo'
              | 'Circ'
              | 'Back'
              | 'Elastic'}`
        | 'none'
}

type ParticleDataGroupParticlePropertyExpression = Partial<
    Record<'c' | `${'r' | 'sinr' | 'cosr'}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`, number>
>
```

### `name`

See [Particle Effect Name](../essentials/particle-effect-name).

### `transform`

See [Particle Effect Transform](../essentials/particle-effect-transform).

### `groups.count`

Amount of times particles in the group will be created.

### `groups.particles`

Particles will share the same random variables (`r1` to `r8`) in each instance of its group.

### `groups.particles.sprite`

Index of sprite to be used for the particle.

### `groups.particles.color`

HTML color string for particle color.

Supported formats: `#RGB`, and `#RRGGBB`.

### `groups.particles.start`

Start time of the particle, from `0` to `1`.

A value of `0.25` will cause the particle to start when the effect is 25% completed.

### `groups.particles.duration`

Duration of the particle, from `0` to `1`.

A value of `0.75` will cause the particle to last for 75% of the effect's duration.

### `groups.particles.[x/y/w/h/r/a]`

Animation of the particle's x coordinate, y coordinate, width, height, rotation, and alpha properties.

The property's value will be animated from `from` to `to` with easing curve of `ease`.

Particle position (`x`/`y`) and size (`w`/`h`) bilinear interpolates within a coordinate system of `(-1, -1)` (bottom-left) to `(1, 1)` (top-right). Particle rotation uses radian, rotating counter-clockwise. Particle alpha ranges from `0` to `1`.

### `groups.particles.[x/y/w/h/r/a].[from/to]`

See [Particle Effect Particle Property Expression](../essentials/particle-effect-particle-property-expression).

## Examples

```json
{
    "name": "#NOTE_CIRCULAR_TAP_RED",
    "transform": {
        "x1": { "x1": 1 }
        // ...
    },
    "groups": [
        {
            "count": 1,
            "particles": [
                {
                    "sprite": 0,
                    "color": "#ff0000",
                    "start": 0,
                    "duration": 1,
                    "x": {
                        "from": { "c": -1 },
                        "to": { "c": 1 },
                        "ease": "outCubic"
                    }
                    // ...
                }
                // ...
            ]
        }
        // ...
    ]
}
```
