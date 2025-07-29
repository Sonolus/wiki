# `POST /sonolus/{type}/create`

`/sonolus/{type}/create` permite que o aplicativo Sonolus crie um item.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`type` | `string` | `posts` , `playlists` , `levels` , `skins` , `backgrounds` , `effects` , `particles` , `engines` ou `replays` .

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
type ServerCreateItemRequest = {
    values: string
}
```

### `values`

Parâmetros de consulta de criação.

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
type ServerCreateItemResponse = {
    key: string
    hashes: string[]
    shouldUpdateInfo?: boolean
    shouldNavigateToItem?: string
}
```

### `key`

Chave de upload definida pelo servidor.

### `hashes`

Hashes de arquivos precisavam ser carregados.

Somente arquivos especificados nos `values` do corpo da solicitação podem ser carregados.

Se não estiver vazio, os arquivos serão enviados usando [`POST /sonolus/{type}/upload`](./post-sonolus-type-upload) .

## Exemplos

```json
{
    "key": "...",
    "hashes": [
        // ...
    ],
    "shouldUpdateInfo": true,
    "shouldNavigateToItem": "..."
}
```
