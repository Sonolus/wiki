# `POST /sonolus/{type}/{itemName}/upload`

`/sonolus/{type}/{itemName}/upload` permite que o aplicativo Sonolus carregue arquivos ao enviar ações para o item de nome `{itemName}` .

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` ou `replays` .
`itemName` | `string` | Nome do item.

## Parâmetros de consulta

Parâmetro de consulta | Valor | Descrição
:-- | :-- | :--
`localization` | `string` | Veja [`localization`](../query-parameters/localization) .
Opções de configuração | `any` | Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

## Cabeçalhos de solicitação

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Session` | `string` | Opcional, veja [`Sonolus-Session`](../headers/sonolus-session) .
`Sonolus-Upload-Key` | `string` | Veja [`POST /sonolus/{type}/{itemName}/submit`](./post-sonolus-type-item-name-submit) .

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
type ServerUploadItemActionResponse = {
    shouldUpdateItem?: boolean
    shouldRemoveItem?: boolean
    shouldNavigateToItem?: string
}
```

## Exemplos

```json
{}
```
