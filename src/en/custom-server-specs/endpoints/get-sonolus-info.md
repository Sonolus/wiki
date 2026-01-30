# `GET /sonolus/info`

`/sonolus/info` provides information of the server, and is used by Sonolus app to populate server home page.

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
type ServerInfo = {
    title: string
    description?: string
    buttons: ServerInfoButton[]
    configuration: ServerConfiguration
    banner?: Srl
}

type ServerInfoButton =
    | ServerInfoAuthenticationButton
    | ServerInfoItemButton
    | ServerInfoConfigurationButton

type ServerInfoAuthenticationButton = {
    type: 'authentication'
}

type ServerInfoItemButton = {
    type:
        | 'room'
        | 'post'
        | 'playlist'
        | 'level'
        | 'replay'
        | 'skin'
        | 'background'
        | 'effect'
        | 'particle'
        | 'engine'
        | 'user'
        | 'configuration'
    title?: Text | (string & {})
    icon?: Icon | (string & {})
    badgeCount?: number
    infoType?: string
    itemName?: string
}

type ServerInfoConfigurationButton = {
    type: 'configuration'
}
```

### `ServerInfoItemButton.itemName`

If present, will navigate to the item directly.

### `configuration.options`

Configuration options.

If modified by client, client will attach modified values to every request.

## Examples

```json
{
    "title": "My Server Title",
    "description": "Description of my server.",
    "buttons": [
        // ...
    ],
    "configuration": {
        "options": [
            // ...
        ]
    },
    "banner": {
        // ...
    }
}
```
