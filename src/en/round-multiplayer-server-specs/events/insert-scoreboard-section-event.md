# `InsertScoreboardSectionEvent`

## Message

```ts
type InsertScoreboardSectionEvent = {
    type: 'insertScoreboardSection'
    index: number
    scoreboardSection: ScoreboardSection
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `index` is out of bound.
-   Insert `scoreboardSection` at `index`.
