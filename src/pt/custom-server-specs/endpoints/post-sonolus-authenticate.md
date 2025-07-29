# `POST /sonolus/authenticate`

`/sonolus/authenticate` permite que o aplicativo Sonolus estabeleça uma sessão de autenticação.

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
`Sonolus-Signature` | `string` | Veja [`Sonolus-Signature`](../headers/sonolus-signature) .

## Corpo da solicitação

```ts
type ServerAuthenticateRequest = {
    type: 'authenticateServer'
    address: string
    time: number
    userProfile: ServiceUserProfile
}
```

O servidor deve verificar se o corpo da solicitação é autêntico usando o cabeçalho de solicitação `Sonolus-Signature` .

### `type`

O servidor deve verificar se o `type` é igual a `'authenticateServer'` .

### `address`

O servidor deve verificar se o `address` corresponde ao endereço do servidor.

### `time`

O servidor deve verificar se `time` é recente.

## Código de Resposta

Código | Descrição
:-- | :--
`200 OK` |
`401 Unauthorized` | Autenticação rejeitada.

## Cabeçalhos de resposta

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, veja [`Sonolus-Version`](../headers/sonolus-version) .

## Corpo de Resposta

```ts
type ServerAuthenticateResponse = {
    session: string
    expiration: number
}
```

### `session`

Informações de sessão definidas pelo servidor.

### `expiration`

Tempo de expiração da sessão, no registro de data e hora Unix em milissegundos.

A sessão deve ser curta, com duração recomendada de 30 minutos ou menos. Após o término, o aplicativo Sonolus iniciará o processo de reautenticação automaticamente.

## Exemplos

```json
{
    "session": "...",
    "expiration": 1640995200000
}
```
