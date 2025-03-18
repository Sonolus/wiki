# `userStatuses`

Players statuses.

## Syntax

```ts
type UserStatuses = UserStatusEntry[]
```

## Remarks

Client will raise a fatal error if:

-   Any user does not exist.
-   Contains duplicated users.
-   Any user status is incompatible with room status.
