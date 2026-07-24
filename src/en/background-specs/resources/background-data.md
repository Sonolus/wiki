# Background Data

Background data is used by Sonolus app to drive a background's rendering.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type BackgroundData = {
    aspectRatio?: number
    fit: 'width' | 'height' | 'contain' | 'cover'
    color: string
    scaleX?: number
    scaleY?: number
}
```

### `aspectRatio`

Optional aspect ratio of the background image.

If present, background image will be forced to the specified aspect ratio instead of the natural aspect ratio.

### `fit`

Fitting strategy when background image aspect ratio does not match screen aspect ratio.

### `color`

HTML color string for background color.

Supported formats: `#RGB`, and `#RRGGBB`.

### `scaleX` and `scaleY`

Optional scaling of the background image.

If present, background image will be scaled respectively after `aspectRatio` and `fit` have been applied.

## Examples

```json
{
    "aspectRatio": 1.778,
    "fit": "cover",
    "color": "#000000"
}
```
