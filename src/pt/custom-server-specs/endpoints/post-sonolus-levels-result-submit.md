# `POST /sonolus/levels/result/submit`

`/sonolus/levels/result/submit` permite que o aplicativo Sonolus envie o replay da tela de resultados.

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

```ts
type ServerSubmitLevelResultRequest = {
    replay: ReplayItem
    values: string
}
```

### `values`

Parâmetros de consulta de envio.

Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

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
type ServerSubmitLevelResultResponse = {
    key: string
    hashes: string[]
}
```

### `key`

Chave de upload definida pelo servidor.

### `hashes`

Hashes de arquivos precisavam ser carregados.

Somente arquivos especificados no corpo da solicitação `replay` e `values` podem ser carregados.

Se não estiver vazio, os arquivos serão enviados usando [`POST /sonolus/levels/result/upload`](./post-sonolus-levels-result-upload) .

## Exemplos

```json
{
    "key": "...",
    "hashes": [
        // ...
    ]
}
```
