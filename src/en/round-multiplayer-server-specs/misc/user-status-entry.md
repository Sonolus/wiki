# `UserStatusEntry`

Player status.

## Syntax

```ts
type UserStatusEntry = {
    userId: ServiceUserId
    status: UserStatus
}
```

## Remarks

Client will raise a fatal error if:

-   User of `userId` does not exist.
