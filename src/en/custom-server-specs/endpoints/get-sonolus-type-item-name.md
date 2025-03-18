# `GET /sonolus/{type}/{itemName}`

`/sonolus/{type}/{itemName}` provides detailed information of item of name `{itemName}`, and is used by Sonolus app to populate server item details view.

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
type ServerItemDetails<T> = {
    item: T
    description?: string
    actions: ServerForm[]
    hasCommunity: boolean
    leaderboards: ServerItemLeaderboard[]
    sections: ServerItemSection[]
}
```

## Examples

```json
{
    "item": {
        // ...
    },
    "description": "Description of the item.",
    "actions": [
        // ...
    ],
    "hasCommunity": true,
    "leaderboards": [
        // ...
    ],
    "sections": [
        // ...
    ]
}
```
