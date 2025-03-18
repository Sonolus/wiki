# `UpdateStatusEvent`

## Message

```ts
type UpdateStatusEvent = {
    type: 'updateStatus'
    status: RoomStatus
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `status` is not selecting but no level is selected.
-   Update status to `status`.
-   If changing status to waiting, set all user statuses to waiting.
-   If changing status to playing, set all results to empty, and set all skipped users' statuses to waiting. Readied clients will wait for `StartRoundEvent` from server to start the round.
