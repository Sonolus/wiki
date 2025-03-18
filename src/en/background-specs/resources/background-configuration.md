# Background Configuration

Background configuration is used by Sonolus app to populate background configuration interface.

## Syntax

```ts
type BackgroundConfiguration = {
    scope?: string
    blur: number
    mask: string
}
```

### `scope`

Configuration is automatically saved and shared between all backgrounds of the same scope.

Without specifying a scope, configuration will be saved only for this background.

### `blur`

Blurring of background image, from `0` to `1`.

### `mask`

HTML color string for mask layered on top of the background.

Supported formats: `#RGB`, `#RRGGBB`, `#RGBA`, and `#RRGGBBAA`.

## Examples

```json
{
    "blur": 0.05,
    "mask": "#00000080"
}
```
