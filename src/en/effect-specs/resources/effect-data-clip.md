# Effect Data Clip

Effect data clip is used by Sonolus app to drive an effect clip's playback.

## Syntax

```ts
type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
```

### `name`

See [Effect Clip Name](../essentials/effect-clip-name).

### `filename`

Filename of the effect clip within effect's audio.

## Examples

```json
{
    "name": "#PERFECT",
    "filename": "perfect.mp3"
}
```
