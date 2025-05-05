# Dados de nível

Os dados de nível são usados pelo aplicativo Sonolus para controlar o mecanismo do nível.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type LevelData = {
    bgmOffset: number
    entities: LevelDataEntity[]
}
```

## Exemplos

```json
{
    "bgmOffset": 0,
    "entities": [
        // ...
    ]
}
```
