# `UpdateScoreboardSectionsEvent`

## Message

```ts
type UpdateScoreboardSectionsEvent = {
    type: 'updateScoreboardSections'
    scoreboardSections: ScoreboardSection[]
}
```

## Remarks

Upon receiving, client will:

-   Update scoreboard sections to `scoreboardSections`.
