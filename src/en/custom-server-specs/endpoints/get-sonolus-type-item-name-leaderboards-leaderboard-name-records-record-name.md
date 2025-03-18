# `GET /sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/{recordName}`

`/sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/{recordName}` provides detailed information of record of `{recordName}` in leaderboard of name `{leaderboardName}` in item of name `{itemName}`, and is used by Sonolus app to populate server item details view's leaderboard section's record's details.

## URL Parameters

| URL Parameter     | Value    | Description                                                                                              |
| :---------------- | :------- | :------------------------------------------------------------------------------------------------------- |
| `type`            | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, or `replays`. |
| `itemName`        | `string` | Name of item.                                                                                            |
| `leaderboardName` | `string` | Name of leaderboard.                                                                                     |
| `recordName`      | `string` | Name of record.                                                                                          |

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
type ServerItemLeaderboardRecordDetails = {
    replays: ReplayItem[]
}
```

## Examples

```json
{
    "replays": [
        // ...
    ]
}
```
