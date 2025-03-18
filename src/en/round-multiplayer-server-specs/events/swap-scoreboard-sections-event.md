# `SwapScoreboardSectionsEvent`

## Message

```ts
type SwapScoreboardSectionsEvent = {
    type: 'swapScoreboardSections'
    indexA: number
    indexB: number
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `indexA` does not exist.
-   Raise a fatal error if section specified by `indexB` does not exist.
-   Swap sections specified by `indexA` and `indexB`.
