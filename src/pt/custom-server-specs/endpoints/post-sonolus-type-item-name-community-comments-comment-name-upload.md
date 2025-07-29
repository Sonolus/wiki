# `POST /sonolus/{type}/{itemName}/community/comments/{commentName}/upload`

`/sonolus/{type}/{itemName}/community/comments/{commentName}/upload` permite que o aplicativo Sonolus carregue arquivos ao enviar ações da comunidade para o comentário de nome `{commentName}` no item de nome `{itemName}` .

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` ou `replays` .
`itemName` | `string` | Nome do item.
`commentName` | `string` | Nome do comentário.

## Parâmetros de consulta

Parâmetro de consulta | Valor | Descrição
:-- | :-- | :--
`localization` | `string` | Veja [`localization`](../query-parameters/localization) .
Opções de configuração | `any` | Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

## Cabeçalhos de solicitação

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Session` | `string` | Opcional, veja [`Sonolus-Session`](../headers/sonolus-session) .
`Sonolus-Upload-Key` | `string` | Veja [`POST /sonolus/{type}/{itemName}/community/comments/{commentName}/submit`](./post-sonolus-type-item-name-community-comments-comment-name-submit) .

## Corpo da solicitação

`multipart/form-data` data com campo `files` .

## Código de resposta

Código | Descrição
:-- | :--
`200 OK` |
`401 Unauthorized` | Autenticação necessária ou expirada.
`404 Not Found` |

## Cabeçalhos de resposta

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, veja [`Sonolus-Version`](../headers/sonolus-version) .

## Corpo de Resposta

```ts
type ServerUploadItemCommunityCommentActionResponse = {
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
```

## Exemplos

```json
{}
```
