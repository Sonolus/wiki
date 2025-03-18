# `POST /sonolus/{type}/{itemName}/community/comments/{commentName}/submit`

`/sonolus/{type}/{itemName}/community/comments/{commentName}/submit` allows Sonolus app to submit community actions to comment of name `{commentName}` in item of name `{itemName}`.

## URL Parameters

| URL Parameter | Value    | Description                                                                                              |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------- |
| `type`        | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, or `replays`. |
| `itemName`    | `string` | Name of item.                                                                                            |
| `commentName` | `string` | Name of comment.                                                                                         |

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
type ServerSubmitItemCommunityCommentActionRequest = {
    values: string
}
```

### `values`

Query parameters of submitted action.

See [Options Query Parameters](../query-parameters/options-query-parameters).

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
type ServerSubmitItemCommunityCommentActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
```

### `shouldUpdateCommunity`

Whether community section should update or not.

### `shouldNavigateCommentsToPage`

Whether comment list should navigate to specified page or not.

### `key`

Server defined upload key.

### `hashes`

Hashes of files needed to be uploaded.

Only files specified in request body `values` can be uploaded.

If not empty, files will be uploaded using [`POST /sonolus/{type}/{itemName}/community/comments/{commentName}/upload`](./post-sonolus-type-item-name-community-comments-comment-name-upload).

## Examples

```json
{
    "key": "...",
    "hashes": [
        // ...
    ],
    "shouldUpdateCommunity": true,
    "shouldUpdateComments": true,
    "shouldNavigateCommentsToPage": 5
}
```
