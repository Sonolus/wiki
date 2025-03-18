# `ArrangeScoreboardSectionScoresEvent`

## Message

```ts
type ArrangeScoreboardSectionScoresEvent = {
    type: 'arrangeScoreboardSectionScores'
    sectionIndex: number
    indexes: number[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `sectionIndex` does not exist.
-   Raise a fatal error if `indexes` contains duplications.
-   Raise a fatal error if any score specified by `indexes` does not exist.
-   Arrange scores in section specified by `sectionIndex` according to `indexes`.

Arranging works by (pseudo code):

```ts
oldScores = sections[event.sectionIndex].scores
newScores = new Array(event.indexes.length)

for (i = 0; i < newScores.length; i++) {
    newScores[i] = oldScores[event.indexes[i]]
}

return newScores
```
