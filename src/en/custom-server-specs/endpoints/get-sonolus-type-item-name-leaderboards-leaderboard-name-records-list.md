# `GET /sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/list`

`/sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/list` provides detailed information of leaderboard of name `{leaderboardName}` in item of name `{itemName}`, and is used by Sonolus app to populate server item details view's leaderboard section's record list.

## URL Parameters

| URL Parameter     | Value    | Description                                                                                              |
| :---------------- | :------- | :------------------------------------------------------------------------------------------------------- |
| `type`            | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, or `replays`. |
| `itemName`        | `string` | Name of item.                                                                                            |
| `leaderboardName` | `string` | Name of leaderboard.                                                                                     |

## Query Parameters

| Query Parameter       | Value    | Description                                                                   |
| :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `localization`        | `string` | See [`localization`](../query-parameters/localization).                       |
| Configuration Options | `any`    | See [Options Query Parameters](../query-parameters/options-query-parameters). |
| `page`                | `number` | See [`page`](../query-parameters/page).                                       |
| `cursor`              | `string` | See [`cursor`](../query-parameters/cursor).                                   |

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
| `404 Not Found`    |                                     |

## Response Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version). |

## Response Body

```ts
type ServerItemLeaderboardRecordList = {
    pageCount: number
    cursor?: string
    records: ServerItemLeaderboardRecord[]
}
```

### `pageCount`

If negative value is used, the list uses cursor pagination.

### `cursor`

Only has effect under cursor pagination. If present, next page is available and will be requested with the cursor value.

### `comments`

It is recommended to keep each page short by showing only 10 records.

## Examples

```json
{
    "pageCount": 5,
    "records": [
        // ...
    ]
}
```
