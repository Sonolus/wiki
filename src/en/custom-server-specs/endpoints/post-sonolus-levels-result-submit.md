# `POST /sonolus/levels/result/submit`

`/sonolus/levels/result/submit` allows Sonolus app to submit replay from result screen.

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
type ServerSubmitLevelResultRequest = {
    replay: ReplayItem
    values: string
}
```

### `values`

Query parameters of submit.

See [Options Query Parameters](../query-parameters/options-query-parameters).

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
type ServerSubmitLevelResultResponse = {
    key: string
    hashes: string[]
}
```

### `key`

Server defined upload key.

### `hashes`

Hashes of files needed to be uploaded.

Only files specified in request body `replay` and `values` can be uploaded.

If not empty, files will be uploaded using [`POST /sonolus/levels/result/upload`](./post-sonolus-levels-result-upload).

## Examples

```json
{
    "key": "...",
    "hashes": [
        // ...
    ]
}
```
