# `POST /sonolus/{type}/upload`

`/sonolus/{type}/upload` permite que o aplicativo Sonolus carregue arquivos ao criar um item.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, ou `replays`.

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
type ServerUploadItemResponse = {
    shouldUpdateInfo?: boolean
    shouldNavigateToItem?: string
}
```

## Exemplos

```json
{}
```
