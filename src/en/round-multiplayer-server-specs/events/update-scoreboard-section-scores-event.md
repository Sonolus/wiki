# `UpdateScoreboardSectionScoresEvent`

## Message

```ts
type UpdateScoreboardSectionScoresEvent = {
    type: 'updateScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Update scores of section specified by `index` to `scores`.
