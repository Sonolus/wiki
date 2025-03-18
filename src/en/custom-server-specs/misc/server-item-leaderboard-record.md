# `ServerItemLeaderboardRecord`

`ServerItemLeaderboardRecord` provides information of an item leaderboard record.

## Syntax

```ts
type ServerItemLeaderboardRecord = {
    name: string
    rank: Text | (string & {})
    player: string
    value: Text | (string & {})
}
```

## Examples

```json
{
    "name": "...",
    "rank": "...",
    "player": "...",
    "value": "..."
}
```
