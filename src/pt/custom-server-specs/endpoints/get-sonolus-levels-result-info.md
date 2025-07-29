# `GET /sonolus/levels/result/info`

`/sonolus/levels/result/info` fornece informações sobre o envio de resultados de níveis e é usado pelo aplicativo Sonolus para dar suporte ao envio de replays da tela de resultados.

## Parâmetros de URL

Nenhum.

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

## Cabeçalhos de resposta

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, veja [`Sonolus-Version`](../headers/sonolus-version) .

## Corpo de Resposta

```ts
type ServerLevelResultInfo = {
    submits?: ServerForm[]
}
```

### `submits`

Se estiver vazio ou ausente, será tratado como se o envio de replay da tela de resultados não fosse suportado.

## Exemplos

```json
{
    "submits": [
        // ...
    ]
}
```
