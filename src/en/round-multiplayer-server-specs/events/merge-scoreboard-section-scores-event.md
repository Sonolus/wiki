# `MergeScoreboardSectionScoresEvent`

## Message

```ts
type MergeScoreboardSectionScoresEvent = {
    type: 'mergeScoreboardSectionScores'
    index: number
    scores: ScoreEntry[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Raise a fatal error if any score in `scores` does not have a corresponding score of the same user.
-   Merge scores in section specified by `index` with `scores.

Merging works by:

```ts
newScores = sections[event.index].scores.clone()

for (score of event.scores) {
    index = newScores.findIndexByUserId(score.userId)
    newScores[index] = score
}
```
