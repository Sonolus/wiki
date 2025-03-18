# `InsertScoreboardSectionScoreEvent`

## Message

```ts
type InsertScoreboardSectionScoreEvent = {
    type: 'insertScoreboardSectionScore'
    sectionIndex: number
    index: number
    score: ScoreEntry
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `sectionIndex` does not exist.
-   Raise a fatal error if `index` is out of bound.
-   Raise a fatal error if a score with user of `score` already exists.
-   Insert `score` at `index` in section specified by `sectionIndex`.
