# `MoveScoreboardSectionEvent`

## Message

```ts
type MoveScoreboardSectionEvent = {
    type: 'moveScoreboardSection'
    fromIndex: number
    toIndex: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `fromIndex` does not exist.
-   Raise a fatal error if `toIndex` is out of bound.
-   Move section specified by `fromIndex` to `toIndex`.
