# Sprite de dados de pele

O sprite de dados da pele é usado pelo aplicativo Sonolus para controlar a renderização de um sprite de pele.

## Sintaxe

```ts
type SkinDataSprite = {
    name: SkinSpriteName | (string & {})
    x: number
    y: number
    w: number
    h: number
    transform: SkinDataTransform
}

type SkinDataTransform = Record<`${'x' | 'y'}${1 | 2 | 3 | 4}`, SkinDataExpression>

type SkinDataExpression = Partial<Record<`${'x' | 'y'}${1 | 2 | 3 | 4}`, number>>
```

### `name`

Veja [o nome do Sprite da Pele](../essentials/skin-sprite-name) .

### `x`

Coordenada x do Sprite dentro da textura da pele.

### `y`

Coordenada y do Sprite na textura da pele.

### `w`

Largura do Sprite.

### `h`

Altura do Sprite.

### `transform`

Veja [Transformação de Sprite de Pele](../essentials/skin-sprite-transform) .

## Exemplos

```json
{
    "name": "#NOTE_HEAD_RED",
    "x": 0,
    "y": 0,
    "w": 64,
    "h": 64,
    "transform": {
        "x1": { "x1": 1 }
        // ...
    }
}
```
