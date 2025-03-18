# `UpdateSuggestionsEvent`

## Message

```ts
type UpdateSuggestionsEvent = {
    type: 'updateSuggestions'
    suggestions: Suggestion[]
}
```

## Remarks

Upon receiving, client will:

-   Update suggestions to `suggestions`.
