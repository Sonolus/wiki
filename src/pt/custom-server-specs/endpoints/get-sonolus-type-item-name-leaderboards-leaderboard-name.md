# `GET /sonolus/{type}/{itemName}/leaderboards/{leaderboardName}`

`/sonolus/{type}/{itemName}/leaderboards/{leaderboardName}` fornece informações detalhadas da tabela de classificação do nome `{leaderboardName}` no item do nome `{itemName}` e é usado pelo aplicativo Sonolus para preencher a seção de tabela de classificação da visualização de detalhes do item do servidor.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` ou `replays` .
`itemName` | `string` | Nome do item.
`leaderboardName` | `string` | Nome da tabela de classificação.

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
type ServerItemLeaderboardDetails = {
    topRecords: ServerItemLeaderboardRecord[]
}
```

## Exemplos

```json
{
    "topRecords": [
        // ...
    ]
}
```
