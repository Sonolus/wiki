# `POST /sonolus/rooms/create`

`/sonolus/rooms/create` permite que o aplicativo Sonolus crie uma sala.

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
type ServerCreateRoomRequest = {}
```

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
type ServerCreateRoomResponse = {
    name: string
    key: string
}
```

### `name`

Nome do quarto.

### `key`

Chave da sala definida pelo servidor.

## Exemplos

```json
{
    "name": "...",
    "key": "..."
}
```

## Observações

O servidor deve criar a sala imediatamente e reservar um lugar para o criador da sala, ou reservar a sala até que o criador da sala termine de criá-la.

Quando o criador da sala termina de criar, o cliente entra na sala com o cabeçalho `Sonolus-Room-Key` contendo o valor da `key` . O servidor pode usar o cabeçalho para verificar se o cliente é o criador da sala e criar/configurar a sala com base nos parâmetros da consulta.
