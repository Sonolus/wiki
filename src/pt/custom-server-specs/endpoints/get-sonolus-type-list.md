# `GET /sonolus/{type}/list`

`/sonolus/{type}/list` fornece informações de itens e é usado pelo aplicativo Sonolus para preencher a lista de itens do servidor.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` , `replays` ou `rooms` .

## Parâmetros de consulta

Parâmetro de consulta | Valor | Descrição
:-- | :-- | :--
`localization` | `string` | Veja [`localization`](../query-parameters/localization) .
Opções de configuração | `any` | Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .
`page` | `number` | Veja [`page`](../query-parameters/page) .
`cursor` | `string` | Veja [`cursor`](../query-parameters/cursor) .
Parâmetros de pesquisa | `any` | Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

### Parâmetros de pesquisa

Ao usar a pesquisa rápida, os parâmetros de pesquisa de `?type=quick&keywords=...` serão enviados.

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

## Cabeçalhos de resposta

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, veja [`Sonolus-Version`](../headers/sonolus-version) .

## Corpo de Resposta

```ts
type ServerItemList<T> = {
    pageCount: number
    cursor?: string
    items: T[]
    searches?: ServerForm[]
}
```

### `pageCount`

Se um valor negativo for usado, a lista usará paginação de cursor.

### `cursor`

Só tem efeito sob paginação com cursor. Se presente, a próxima página estará disponível e será solicitada com o valor do cursor.

### `items`

É recomendável manter cada página curta, mostrando apenas 20 itens.

## Exemplos

```json
{
    "pageCount": 5,
    "items": [
        // ...
    ],
    "searches": [
        // ...
    ]
}
```
