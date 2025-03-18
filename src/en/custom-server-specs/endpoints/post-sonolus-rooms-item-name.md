# `POST /sonolus/rooms/{itemName}`

`/sonolus/rooms/{name}` allows Sonolus app to join a room.

## URL Parameters

| URL Parameter | Value    | Description   |
| :------------ | :------- | :------------ |
| `itemName`    | `string` | Name of room. |

## Query Parameters

| Query Parameter       | Value    | Description                                                                             |
| :-------------------- | :------- | :-------------------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                                 |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters).           |
| Create Parameters     | `any`    | Optional, see [Options Query Parameters](../query-parameters/options-query-parameters). |

## Request Headers

| Header              | Value    | Description                                                                |
| :------------------ | :------- | :------------------------------------------------------------------------- |
| `Sonolus-Session`   | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session).             |
| `Sonolus-Signature` | `string` | See [`Sonolus-Signature`](../headers/sonolus-signature).                   |
| `Sonolus-Room-Key`  | `string` | Optional, see [`POST /sonolus/rooms/create`](./post-sonolus-rooms-create). |

## Request Body

```ts
type ServerJoinRoomRequest = {
    type: 'authenticateMultiplayer'
    address: string
    room: string
    time: number
    userProfile: ServiceUserProfile
}
```

Server should verify that request body is authentic using `Sonolus-Signature` request header.

### `type`

Server should verify that `type` equals to `'authenticateMultiplayer'`.

### `address`

Server should verify that `address` matches server address.

### `time`

Server should verify that `time` is recent.

## Response Code

| Code               | Description                         |
| :----------------- | :---------------------------------- |
| `200 OK`           |                                     |
| `401 Unauthorized` | Authentication required or expired. |
| `404 Not Found`    |                                     |

## Response Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version). |

## Response Body

```ts
type ServerJoinRoomResponse = {
    url: string
    type: 'round'
    session: string
}
```

### `url`

Url of multiplayer server.

### `type`

Type of multiplayer room.

Currently only `'round'` is supported.

### `session`

Server defined session information.

## Examples

```json
{
    "url": "wss://...",
    "type": "round",
    "session": "..."
}
```

## Remarks

If a room is being created, create query parameters and `Sonolus-Room-key` header will be available.

If successful, client will join the multiplayer server with `Sonolus-Room-Session` header containing the value of `session`. Server can use it to relay necessary information to multiplayer server.
