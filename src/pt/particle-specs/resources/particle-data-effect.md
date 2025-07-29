# Efeito de Dados de Partículas

O efeito de dados de partículas é usado pelo aplicativo Sonolus para controlar a renderização do efeito de partículas.

## Sintaxe

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

Veja [Nome do Efeito de Partícula](../essentials/particle-effect-name) .

### `transform`

Veja [Transformação de Efeito de Partícula](../essentials/particle-effect-transform) .

### `groups.count`

Quantidade de vezes que as partículas no grupo serão criadas.

### `groups.particles`

As partículas compartilharão as mesmas variáveis aleatórias ( `r1` a `r8` ) em cada instância de seu grupo.

### `groups.particles.sprite`

Índice do sprite a ser usado para a partícula.

### `groups.particles.color`

Sequência de cores HTML para cor de partículas.

Formatos suportados: `#RGB` e `#RRGGBB` .

### `groups.particles.start`

Hora de início da partícula, de `0` a `1` .

Um valor de `0.25` fará com que a partícula inicie quando o efeito estiver 25% concluído.

### `groups.particles.duration`

Duração da partícula, de `0` a `1` .

Um valor de `0.75` fará com que a partícula dure 75% da duração do efeito.

### `groups.particles.[x/y/w/h/r/a]`

Animação das coordenadas x, y, largura, altura, rotação e propriedades alfa da partícula.

O valor da propriedade será animado `from` `to` com curva de `ease` de suavização.

A posição ( `x` / `y` ) e o tamanho ( `w` / `h` ) das partículas são interpolados bilinearmente dentro de um sistema de coordenadas de `(-1, -1)` (canto inferior esquerdo) a `(1, 1)` (canto superior direito). A rotação das partículas utiliza radianos, girando no sentido anti-horário. O alfa das partículas varia de `0` a `1` .

### `groups.particles.[x/y/w/h/r/a].[from/to]`

Veja [Expressão de propriedade de partícula de efeito de partícula](../essentials/particle-effect-particle-property-expression) .

## Exemplos

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
