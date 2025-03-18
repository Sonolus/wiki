# `RemoveScoreboardSectionEvent`

## Message

```ts
type RemoveScoreboardSectionEvent = {
    type: 'removeScoreboardSection'
    index: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Remove section specified by `index`.
