# `SwapSuggestionsEvent`

## Message

```ts
type SwapSuggestionsEvent = {
    type: 'swapSuggestions'
    suggestionA: Suggestion
    suggestionB: Suggestion
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `suggestionA` does not exist.
-   Raise a fatal error if `suggestionB` does not exist.
-   Swap `suggestionA` and `suggestionB`.
