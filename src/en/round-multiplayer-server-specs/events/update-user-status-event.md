# `UpdateUserStatusEvent`

## Message

```ts
type UpdateUserStatusEvent = {
    type: 'updateUserStatus'
    userStatus: UserStatusEntry
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if user of `userStatus` does not exist.
-   Raise a fatal error if status of `userStatus` is incompatible with room status.
-   Update user statuses with `userStatus`.
