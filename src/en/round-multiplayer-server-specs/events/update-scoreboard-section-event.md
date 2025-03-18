# `UpdateScoreboardSectionEvent`

## Message

```ts
type UpdateScoreboardSectionEvent = {
    type: 'updateScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Update section specified by `index` to `scoreboardSection`.
