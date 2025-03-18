# `UpdateLevelEvent`

## Message

```ts
type UpdateLevelEvent = {
    type: 'updateLevel'
    level: Sil | null
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if room status is not selecting.
-   Update level to `level`.
-   Update level options to empty.
