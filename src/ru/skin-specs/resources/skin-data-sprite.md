# Данные Спрайта Скина

Данные спрайта скина использовано приложением Sonolus чтобы управлять рендерингом скина.

## Синтаксис

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

Посмотрите [Название Спрайта Скина](../essentials/skin-sprite-name).

### `x`

Х координата спрайта в текстуре скина.

### `y`

Y координата спрайта в текстуре скина.

### `w`

Широта спрайта.

### `h`

Высота спрайта.

### `transform`

Посмотрите [Трансформацию Спрайта Скина](../essentials/skin-sprite-transform).

## Примеры

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
