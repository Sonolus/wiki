# `UpdateLevelOptionsEvent`

## Message

```ts
type UpdateLevelOptionsEvent = {
    type: 'updateLevelOptions'
    levelOptions: LevelOptionEntry[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if room status is not selecting.
-   Update level options to `levelOptions`.
