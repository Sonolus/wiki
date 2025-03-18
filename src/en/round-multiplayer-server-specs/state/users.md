# `users`

Players.

## Syntax

```ts
type Users = RoomUser[]
```

## Remarks

Client will raise a fatal error if:

-   Contains duplications.
-   Does not contain client's user.
