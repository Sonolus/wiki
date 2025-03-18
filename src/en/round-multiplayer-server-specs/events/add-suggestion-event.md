# `AddSuggestionEvent`

## Message

```ts
type AddSuggestionEvent = {
    type: 'addSuggestion'
    suggestion: Suggestion
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `suggestion` already exists.
-   Add `suggestion`.
