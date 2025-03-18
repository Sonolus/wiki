# `UpdateUserStatusesEvent`

## Message

```ts
type UpdateUserStatusesEvent = {
    type: 'updateUserStatuses'
    userStatuses: UserStatusEntry[]
}
```

## Remarks

Upon receiving, client will:

-   Update user statuses to `userStatuses`.
