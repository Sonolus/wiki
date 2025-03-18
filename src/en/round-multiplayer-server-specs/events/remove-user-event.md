# `RemoveUserEvent`

## Message

```ts
type RemoveUserEvent = {
    type: 'removeUser'
    user: RoomUser
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `user` does not exist.
-   Raise a fatal error if `user` is the client.
-   Set master to `null` if removed `user` was master.
-   Set lead to `null` if removed `user` was lead.
-   Remove removed `user`'s result.
-   Remove removed `user` from scoreboard sections.
