# `GET /sonolus/{type}/{itemName}/community/comments/list`

`/sonolus/{type}/{itemName}/community/comments/list` fornece informações de comentários do item de nome `{itemName}` e é usado pelo aplicativo Sonolus para preencher a lista de comentários da seção da comunidade da visualização de detalhes do item do servidor.

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
`page` | `number` | Veja [`page`](../query-parameters/page) .
`cursor` | `string` | Veja [`cursor`](../query-parameters/cursor) .

## Cabeçalhos de solicitação

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Session` | `string` | Opcional, veja [`Sonolus-Session`](../headers/sonolus-session) .

## Corpo da solicitação

Nenhum.

## Código de Resposta

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
type ServerItemCommunityCommentList = {
    pageCount: number
    cursor?: string
    comments: ServerItemCommunityComment[]
}
```

### `pageCount`

Se um valor negativo for usado, a lista usará paginação de cursor.

### `cursor`

Só tem efeito sob paginação com cursor. Se presente, a próxima página estará disponível e será solicitada com o valor do cursor.

### `comments`

É recomendável manter cada página curta, mostrando apenas 10 comentários.

## Exemplos

```json
{
    "pageCount": 5,
    "comments": [
        // ...
    ]
}
```
