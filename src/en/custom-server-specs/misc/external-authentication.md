# External Authentication

External authentication allows external services to offer "sign in with Sonolus" features.

## Initiation

To initiate external authentication, use a deep link `sonolus://external-login/example.com/path/to/endpoint?foo=bar#hash`.

If user confirms, a `POST` request will be sent to the endpoint.

## Request Headers

| Header              | Value    | Description                                              |
| :------------------ | :------- | :------------------------------------------------------- |
| `Sonolus-Signature` | `string` | See [`Sonolus-Signature`](../headers/sonolus-signature). |

## Request Body

```ts
type ServerAuthenticateExternalRequest = {
    type: 'authenticateExternal'
    url: string
    time: number
    userProfile: UserProfile
}
```

Server should verify that request body is authentic using `Sonolus-Signature` request header.

### `type`

Server should verify that `type` equals to `'authenticateExternal'`.

### `url`

Server should verify that `url` matches external authentication endpoint.

### `time`

Server should verify that `time` is recent.

## Response Code

| Code               | Description              |
| :----------------- | :----------------------- |
| `200 OK`           |                          |
| `401 Unauthorized` | Authentication rejected. |

## Response Headers

None.

## Response Body

## Response Body

```ts
type ServiceAuthenticateExternalResponse = ServerMessage
```

## Examples

```json
{
    "message": "..."
}
```
