# `RemoveSuggestionEvent`

## Message

```ts
type RemoveSuggestionEvent = {
    type: 'removeSuggestion'
    suggestion: Suggestion
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `suggestion` does not exist.
-   Remove `suggestion`.
