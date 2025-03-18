# `SwapScoreboardSectionScoresEvent`

## Message

```ts
type SwapScoreboardSectionScoresEvent = {
    type: 'swapScoreboardSectionScores'
    sectionIndex: number
    indexA: number
    indexB: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `sectionIndex` does not exist.
-   Raise a fatal error if score specified by `indexA` does not exist.
-   Raise a fatal error if score specified by `indexB` does not exist.
-   Swap scores specified by `sectionIndex`, `indexA`, and `indexB`.
