# `GET /sonolus/{type}/info`

`/sonolus/{type}/info` provides information of items, and is used by Sonolus app to populate server item info view.

## URL Parameters

| URL Parameter | Value    | Description                                                                                                       |
| :------------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `type`        | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, `replays`, or `rooms`. |

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

## Response Headers

| Header            | Value    | Description                                                    |
| :---------------- | :------- | :------------------------------------------------------------- |
| `Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version). |

## Response Body

```ts
type ServerItemInfo = {
    creates?: ServerForm[]
    searches?: ServerForm[]
    sections: ServerItemSection[]
    banner?: Srl
}
```

## Examples

```json
{
    "creates": [
        // ...
    ],
    "searches": [
        // ...
    ],
    "sections": [
        // ...
    ],
    "banner": {
        // ...
    }
}
```
