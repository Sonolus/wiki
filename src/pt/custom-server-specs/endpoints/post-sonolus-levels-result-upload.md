# `POST /sonolus/levels/result/upload`

`/sonolus/levels/result/upload` permite que o aplicativo Sonolus carregue arquivos ao enviar o replay da tela de resultados.

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
`Sonolus-Upload-Key` | `string` | Veja [`POST /sonolus/{type}/create`](./post-sonolus-type-create) .

## Corpo da solicitação

`multipart/form-data` data com campo `files` .

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
type ServerUploadLevelResultResponse = {}
```

## Exemplos

```json
{}
```
