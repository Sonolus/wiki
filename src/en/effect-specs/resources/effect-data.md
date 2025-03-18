# Effect Data

Effect data is used by Sonolus app to drive an effect's playback.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type EffectData = {
    clips: EffectDataClip[]
}
```

## Examples

```json
{
    "clips": [
        // ...
    ]
}
```
