# `GET /sonolus/{type}/list`

`/sonolus/{type}/list` provides information of items, and is used by Sonolus app to populate server item list view.

## URL Parameters

| URL Parameter | Value    | Description                                                                                                       |
| :------------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `type`        | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, `replays`, or `rooms`. |

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |
| `page`                | `number` | See [`page`](../query-parameters/page).                                       |
| `cursor`              | `string` | See [`cursor`](../query-parameters/cursor).                                   |
| Search Parameters     | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |

### Search Parameters

When using quick search, search parameters of `?type=quick&keywords=...` will be sent.

## Request Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Session` | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session). |

## Request Body

None.

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
type ServerItemList<T> = {
    pageCount: number
    cursor?: string
    items: T[]
    searches?: ServerForm[]
    quickSearchValues?: string
}
```

### `pageCount`

If negative value is used, the list uses cursor pagination.

### `cursor`

Only has effect under cursor pagination. If present, next page is available and will be requested with the cursor value.

### `items`

It is recommended to keep each page short by showing only 20 items.

## Examples

```json
{
    "pageCount": 5,
    "items": [
        // ...
    ],
    "searches": [
        // ...
    ]
}
```
