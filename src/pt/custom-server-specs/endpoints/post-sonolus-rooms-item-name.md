# `POST /sonolus/rooms/{itemName}`

`/sonolus/rooms/{name}` permite que o aplicativo Sonolus entre em uma sala.

## Parâmetros de URL

Parâmetro de URL | Valor | Descrição
:-- | :-- | :--
`itemName` | `string` | Nome do quarto.

## Parâmetros de consulta

Parâmetro de consulta | Valor | Descrição
:-- | :-- | :--
`localization` | `string` | Veja [`localization`](../query-parameters/localization) .
Opções de configuração | `any` | Consulte [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .
Criar Parâmetros | `any` | Opcional, veja [Parâmetros de consulta de opções](../query-parameters/options-query-parameters) .

## Cabeçalhos de solicitação

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Session` | `string` | Opcional, veja [`Sonolus-Session`](../headers/sonolus-session) .
`Sonolus-Signature` | `string` | Veja [`Sonolus-Signature`](../headers/sonolus-signature) .
`Sonolus-Room-Key` | `string` | Opcional, veja [`POST /sonolus/rooms/create`](./post-sonolus-rooms-create) .

## Corpo da solicitação

```ts
type ServerJoinRoomRequest = {
    type: 'authenticateMultiplayer'
    address: string
    room: string
    time: number
    userProfile: ServiceUserProfile
}
```

O servidor deve verificar se o corpo da solicitação é autêntico usando o cabeçalho de solicitação `Sonolus-Signature` .

### `type`

O servidor deve verificar se o `type` é igual a `'authenticateMultiplayer'` .

### `address`

O servidor deve verificar se o `address` corresponde ao endereço do servidor.

### `time`

O servidor deve verificar se `time` é recente.

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
type ServerJoinRoomResponse = {
    url: string
    type: 'round'
    session: string
}
```

### `url`

URL do servidor multijogador.

### `type`

Tipo de sala multijogador.

Atualmente, somente `'round'` é suportado.

### `session`

Informações de sessão definidas pelo servidor.

## Exemplos

```json
{
    "url": "wss://...",
    "type": "round",
    "session": "..."
}
```

## Observações

Se uma sala estiver sendo criada, crie parâmetros de consulta e o cabeçalho `Sonolus-Room-key` estará disponível.

Se for bem-sucedido, o cliente entrará no servidor multijogador com o cabeçalho `Sonolus-Room-Session` contendo o valor da `session` . O servidor pode usá-lo para retransmitir as informações necessárias ao servidor multijogador.
