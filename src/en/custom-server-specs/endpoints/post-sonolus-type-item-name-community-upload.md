# `POST /sonolus/{type}/{itemName}/community/upload`

`/sonolus/{type}/{itemName}/community/upload` allows Sonolus app to upload files when submitting community actions to item of name `{itemName}`.

## URL Parameters

| URL Parameter | Value    | Description                                                                                              |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------- |
| `type`        | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, or `replays`. |
| `itemName`    | `string` | Name of item.                                                                                            |

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |

## Request Headers

| Header               | Value    | Description                                                                                               |
| :------------------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `Sonolus-Session`    | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session).                                            |
| `Sonolus-Upload-Key` | `string` | See [`POST /sonolus/{type}/{itemName}/community/submit`](./post-sonolus-type-item-name-community-submit). |

## Request Body

`multipart/form-data` encoded data with `files` field.

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
type ServerUploadItemCommunityActionResponse = {
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
```

## Examples

```json
{}
```
