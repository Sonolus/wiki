# `POST /sonolus/{type}/{itemName}/community/submit`

`/sonolus/{type}/{itemName}/community/submit` permite que o aplicativo Sonolus envie ações da comunidade para o item de nome `{itemName}` .

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

## Corpo da solicitação

```ts
type ServerSubmitItemCommunityActionRequest = {
    values: string
}
```

### `values`

Parâmetros de consulta da ação enviada.

Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

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
type ServerSubmitItemCommunityActionResponse = {
    key: string
    hashes: string[]
    shouldUpdateCommunity?: boolean
    shouldUpdateComments?: boolean
    shouldNavigateCommentsToPage?: number
}
```

### `shouldUpdateCommunity`

Se a seção da comunidade deve ser atualizada ou não.

### `shouldNavigateCommentsToPage`

Se a lista de comentários deve navegar para a página especificada ou não.

### `key`

Chave de upload definida pelo servidor.

### `hashes`

Hashes de arquivos precisavam ser carregados.

Somente arquivos especificados nos `values` do corpo da solicitação podem ser carregados.

Se não estiver vazio, os arquivos serão enviados usando [`POST /sonolus/{type}/{itemName}/community/upload`](./post-sonolus-type-item-name-community-upload) .

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
