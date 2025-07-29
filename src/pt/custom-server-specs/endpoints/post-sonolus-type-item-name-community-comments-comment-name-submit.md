# `POST /sonolus/{type}/{itemName}/community/comments/{commentName}/submit`

`/sonolus/{type}/{itemName}/community/comments/{commentName}/submit` permite que o aplicativo Sonolus envie ações da comunidade para o comentário de nome `{commentName}` no item de nome `{itemName}` .

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, ou `replays`.
`itemName` | `string` | Nome do item.
`commentName` | `string` | Nome do comentário.

## Query Parameters

Query Parameter | Valor | Description
:-- | :-- | :--
`localization` | `string` | See [`localization`](../query-parameters/localization).
Opções de configuração | `any` | See [Options Query Parameters](../query-parameters/options-query-parameters).

## Request Headers

Header | Value | Description
:-- | :-- | :--
`Sonolus-Session` | `string` | Optional, see [`Sonolus-Session`](../headers/sonolus-session).

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

Code | Description
:-- | :--
`200 OK` |
`401 Unauthorized` | Authentication required or expired.
`404 Not Found` |

## Response Headers

Header | Value | Description
:-- | :-- | :--
`Sonolus-Version` | `string` | Optional, see [`Sonolus-Version`](../headers/sonolus-version).

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

Se não estiver vazio, os arquivos serão enviados usando [`POST /sonolus/{type}/{itemName}/community/comments/{commentName}/upload`](./post-sonolus-type-item-name-community-comments-comment-name-upload) .

## Exemplos

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
