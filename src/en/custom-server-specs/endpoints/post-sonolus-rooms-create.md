# `POST /sonolus/rooms/create`

`/sonolus/rooms/create` allows Sonolus app to create a room.

## URL Parameters

None.

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |

## Request Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Session` | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session). |

## Request Body

```ts
type ServerCreateRoomRequest = {}
```

## Response Code

| Code               | Description                         |
| :----------------- | :---------------------------------- |
| `200 OK`           |                                     |
| `401 Unauthorized` | Authentication required or expired. |

## Response Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version). |

## Response Body

```ts
type ServerCreateRoomResponse = {
    name: string
    key: string
}
```

### `name`

Name of the room.

### `key`

Server defined room key.

## Examples

```json
{
    "name": "...",
    "key": "..."
}
```

## Remarks

Server should create the room immediately and reserve a spot for the room creator, or reserve the room until the room creator has finished creating.

When the room creator has finished creating, client joins the room with `Sonolus-Room-Key` header containing the value of `key`. Server can use the header to verify the client is the room creator, and create/configure the room based on query parameters.
