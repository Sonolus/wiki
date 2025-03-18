# Level Data Entity

Level data entity is used by engine to populate entities.

## Syntax

```ts
type LevelDataEntity = {
    name?: string
    archetype: EngineArchetypeName | (string & {})
    data: (
        | {
              name: EngineArchetypeDataName | (string & {})
              value: number
          }
        | {
              name: EngineArchetypeDataName | (string & {})
              ref: string
          }
    )[]
}
```

## Examples

```json
{
    "archetype": "TapNote",
    "data": [
        {
            "name": "#BEAT",
            "value": 10
        }
        // ...
    ]
}
```
