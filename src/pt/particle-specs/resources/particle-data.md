# Dados de partículas

Os dados de partículas são usados pelo aplicativo Sonolus para controlar a renderização de uma partícula.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

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

Largura da textura das partículas.

### `height`

Altura da textura das partículas.

### `interpolation`

É recomendável usar `false` para partículas em estilo pixel art para preservar bordas nítidas, e `true` caso contrário.

## Exemplos

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
