# `UpdateAutoExitEvent`

## Message

```ts
type UpdateAutoExitEvent = {
    type: 'updateAutoExit'
    autoExit: AutoExit
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if room status is not selecting.
-   Update auto exit to `autoExit`.
