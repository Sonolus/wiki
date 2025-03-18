# `POST /sonolus/{type}/{itemName}/submit`

`/sonolus/{type}/{itemName}/community/submit` allows Sonolus app to submit actions to item of name `{itemName}`.

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

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Session` | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session). |

## Request Body

```ts
type ServerSubmitItemActionRequest = {
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
type ServerSubmitItemActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateItem?: boolean
    shouldRemoveItem?: boolean
    shouldNavigateToItem?: string
}
```

### `shouldUpdate`

Whether item details view should update or not.

### `shouldRemove`

Whether item details view should be removed or not.

### `key`

Server defined upload key.

### `hashes`

Hashes of files needed to be uploaded.

Only files specified in request body `values` can be uploaded.

If not empty, files will be uploaded using [`POST /sonolus/{type}/{itemName}/upload`](./post-sonolus-type-item-name-upload).

## Examples

```json
{
    "key": "...",
    "hashes": [
        // ...
    ],
    "shouldUpdateItem": true,
    "shouldRemoveItem": true,
    "shouldNavigateToItem": "..."
}
```
