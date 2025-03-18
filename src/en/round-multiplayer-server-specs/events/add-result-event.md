# `AddResultEvent`

## Message

```ts
type AddResultEvent = {
    type: 'addResult'
    result: ResultEntry
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if user of `result` does not exist.
-   Raise a fatal error if user of `result` already has a result.
-   Add `result`.
