# `AddUserEvent`

## Message

```ts
type AddUserEvent = {
    type: 'addUser'
    user: RoomUser
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `user` already exists.
-   Add `user`.
-   Set added user's status to waiting.
