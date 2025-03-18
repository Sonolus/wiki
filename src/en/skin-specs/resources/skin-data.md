# Skin Data

Skin data is used by Sonolus app to drive a skin's rendering.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type SkinData = {
    width: number
    height: number
    interpolation: boolean
    sprites: SkinDataSprite[]
}
```

### `width`

Width of skin texture.

### `height`

Height of skin texture.

### `interpolation`

It is recommended to use `false` for pixel art styled skins to preserve crisp edges, and `true` otherwise.

## Examples

```json
{
    "width": 2048,
    "height": 2048,
    "interpolation": true,
    "sprites": [
        // ...
    ]
}
```
