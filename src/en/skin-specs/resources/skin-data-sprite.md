# Skin Data Sprite

Skin data sprite is used by Sonolus app to drive a skin sprite's rendering.

## Syntax

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

See [Skin Sprite Name](../essentials/skin-sprite-name).

### `x`

Sprite's x coordinate within skin texture.

### `y`

Sprite's y coordinate within skin texture.

### `w`

Sprite's width.

### `h`

Sprite's height.

### `transform`

See [Skin Sprite Transform](../essentials/skin-sprite-transform).

## Examples

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
