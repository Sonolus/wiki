# `UpdateScoreboardSectionScoresValueEvent`

## Message

```ts
type UpdateScoreboardSectionScoresValueEvent = {
    type: 'updateScoreboardSectionScoresValue'
    index: number
    values: (Text | (string & {}))[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Raise a fatal error if `values` is longer than scores of section.
-   Update score values of section specified by `index` to `values`.
