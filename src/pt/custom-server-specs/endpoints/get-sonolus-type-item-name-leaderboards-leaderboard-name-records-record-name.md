# `GET /sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/{recordName}`

`/sonolus/{type}/{itemName}/leaderboards/{leaderboardName}/records/{recordName}` fornece informações detalhadas do registro de `{recordName}` no quadro de líderes de nome `{leaderboardName}` no item de nome `{itemName}` e é usado pelo aplicativo Sonolus para preencher os detalhes do registro da seção de quadro de líderes da visualização de detalhes do item do servidor.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` ou `replays` .
`itemName` | `string` | Nome do item.
`leaderboardName` | `string` | Nome da tabela de classificação.
`recordName` | `string` | Nome do registro.

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
type ServerItemLeaderboardRecordDetails = {
    replays: ReplayItem[]
}
```

## Exemplos

```json
{
    "replays": [
        // ...
    ]
}
```
