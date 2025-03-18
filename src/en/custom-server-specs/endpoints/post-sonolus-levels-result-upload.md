# `POST /sonolus/levels/result/upload`

`/sonolus/levels/result/upload` allows Sonolus app to upload files when submitting replay from result screen.

## URL Parameters

None.

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |

## Request Headers

| Header               | Value    | Description                                                      |
| :------------------- | :------- | :--------------------------------------------------------------- |
| `Sonolus-Session`    | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session).   |
| `Sonolus-Upload-Key` | `string` | See [`POST /sonolus/{type}/create`](./post-sonolus-type-create). |

## Request Body

`multipart/form-data` encoded data with `files` field.

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
type ServerUploadLevelResultResponse = {}
```

## Examples

```json
{}
```
