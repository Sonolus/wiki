# Level Data

Level data is used by Sonolus app to drive a level's engine.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type LevelData = {
    bgmOffset: number
    entities: LevelDataEntity[]
}
```

## Examples

```json
{
    "bgmOffset": 0,
    "entities": [
        // ...
    ]
}
```
