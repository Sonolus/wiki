# `ServerItemLeaderboardRecord`

`ServerItemLeaderboardRecord` fornece informações de um registro de classificação de itens.

## Sintaxe

```ts
type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    value: Text | (string & {})
}
```

## Exemplos

```json
{
    "name": "...",
    "rank": "...",
    "player": "...",
    "value": "..."
}
```
