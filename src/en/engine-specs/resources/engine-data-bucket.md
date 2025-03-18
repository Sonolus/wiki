# Engine Data Bucket

Engine data bucket is used by Sonolus app to populate judgment graphs in result screen.

## Syntax

```ts
type EngineDataBucket = {
    sprites: EngineDataBucketSprite[]
    unit?: Text | (string & {})
}

type EngineDataBucketSprite = {
    id: number
    fallbackId?: number
    x: number
    y: number
    w: number
    h: number
    rotation: number
}
```

## Examples

```json
{
    "sprites": [
        {
            "id": 0,
            "fallbackId": 1,
            "x": 0,
            "y": 0,
            "w": 2,
            "h": 2,
            "rotation": 0
        }
    ],
    "unit": "#MILLISECOND_UNIT"
}
```
