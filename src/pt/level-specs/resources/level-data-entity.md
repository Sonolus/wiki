# Entidade de Dados de Nível

A entidade de dados de nível é usada pelo mecanismo para preencher entidades.

## Sintaxe

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

## Exemplos

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
