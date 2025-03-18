# `RoomUser`

Player.

## Syntax

```ts
type RoomUser = {
    authentication: string
    signature: string
}
```

### `authentication`

Base64 encoded body of `JoinRoomRequest`.

### `signature`

`Sonolus-Signature` header of `JoinRoomRequest`.

## Remarks

Client will raise a fatal error if:

-   `signature` and `authentication` do not match.
-   Address of `authentication` does not match.
-   Room of `authentication` does not match.
-   Time of `authentication` is more than 24 hours old.
