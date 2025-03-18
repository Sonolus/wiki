# `UpdateIsSuggestionsLockedEvent`

## Message

```ts
type UpdateIsSuggestionsLockedEvent = {
    type: 'updateIsSuggestionsLocked'
    isSuggestionsLocked: boolean
}
```

## Remarks

Upon receiving, client will:

-   Update is suggestions locked to `isSuggestionsLocked`.
