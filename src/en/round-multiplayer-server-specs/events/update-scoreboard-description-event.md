# `UpdateScoreboardDescriptionEvent`

## Message

```ts
type UpdateScoreboardDescriptionEvent = {
    type: 'updateScoreboardDescription'
    scoreboardDescription?: string
}
```

## Remarks

Upon receiving, client will:

-   Update scoreboard description to `scoreboardDescription`.
