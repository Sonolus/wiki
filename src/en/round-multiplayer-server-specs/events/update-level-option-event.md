# `UpdateLevelOptionEvent`

## Message

```ts
type UpdateLevelOptionEvent = {
    type: 'updateLevelOption'
    levelOption: LevelOptionEntry
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if room status is not selecting.
-   Update level options with `levelOption`.
