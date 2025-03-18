# `MoveScoreboardSectionScoreEvent`

## Message

```ts
type MoveScoreboardSectionScoreEvent = {
    type: 'moveScoreboardSectionScore'
    sectionIndex: number
    fromIndex: number
    toIndex: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `sectionIndex` does not exist.
-   Raise a fatal error if score specified by `fromIndex` does not exist.
-   Raise a fatal error if `toIndex` is out of bound.
-   Move score specified by `sectionIndex` and `fromIndex` to `toIndex`.
