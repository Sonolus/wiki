# `UpdateUsersEvent`

## Message

```ts
type UpdateUsersEvent = {
    type: 'updateUsers'
    users: RoomUser[]
}
```

## Remarks

Upon receiving, client will:

-   Update users to `users`.
