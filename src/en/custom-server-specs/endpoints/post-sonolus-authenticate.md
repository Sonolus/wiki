# `POST /sonolus/authenticate`

`/sonolus/authenticate` allows Sonolus app to establish an authentication session.

## URL Parameters

None.

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |

## Request Headers

| Header              | Value    | Description                                              |
| :------------------ | :------- | :------------------------------------------------------- |
| `Sonolus-Signature` | `string` | See [`Sonolus-Signature`](../headers/sonolus-signature). |

## Request Body

```ts
type ServerAuthenticateRequest = {
    type: 'authenticateServer'
    address: string
    time: number
    userProfile: ServiceUserProfile
}
```

Server should verify that request body is authentic using `Sonolus-Signature` request header.

### `type`

Server should verify that `type` equals to `'authenticateServer'`.

### `address`

Server should verify that `address` matches server address.

### `time`

Server should verify that `time` is recent.

## Response Code

| Code               | Description              |
| :----------------- | :----------------------- |
| `200 OK`           |                          |
| `401 Unauthorized` | Authentication rejected. |

## Response Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version). |

## Response Body

```ts
type ServerAuthenticateResponse = {
    session: string
    expiration: number
}
```

### `session`

Server defined session information.

### `expiration`

Session expiration time, in Unix timestamp in milliseconds.

Session should be short lived, recommended 30 minutes or less. Once expired, Sonolus app will initiate re-authentication process automatically.

## Examples

```json
{
    "session": "...",
    "expiration": 1640995200000
}
```
