# `RemoveScoreboardSectionScoreEvent`

## Message

```ts
type RemoveScoreboardSectionScoreEvent = {
    type: 'removeScoreboardSectionScore'
    sectionIndex: number
    index: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `sectionIndex` does not exist.
-   Raise a fatal error if score specified by `index` does not exist.
-   Remove score specified by `sectionIndex` and `index`.
