# Autenticação externa

A autenticação externa permite que serviços externos ofereçam recursos de "entrada com Sonolus".

## Iniciação

Para iniciar a autenticação externa, use um link profundo `sonolus://external-login/example.com/path/to/endpoint?foo=bar#hash` .

Se o usuário confirmar, uma solicitação `POST` será enviada ao endpoint.

## Cabeçalhos de solicitação

Cabeçalho | Valor | Descrição
:-- | :-- | :--
`Sonolus-Signature` | `string` | Veja [`Sonolus-Signature`](../headers/sonolus-signature) .

## Corpo da solicitação

```ts
type ServerAuthenticateExternalRequest = {
    type: 'authenticateExternal'
    url: string
    time: number
    userProfile: UserProfile
}
```

O servidor deve verificar se o corpo da solicitação é autêntico usando o cabeçalho de solicitação `Sonolus-Signature` .

### `type`

O servidor deve verificar se o `type` é igual a `'authenticateExternal'` .

### `url`

O servidor deve verificar se `url` corresponde ao ponto de extremidade de autenticação externa.

### `time`

O servidor deve verificar se `time` é recente.

## Código de resposta

Código | Descrição
:-- | :--
`200 OK` |
`401 Unauthorized` | Autenticação rejeitada.

## Cabeçalhos de resposta

Nenhum.

## Corpo de Resposta

## Corpo de Resposta

```ts
type ServiceAuthenticateExternalResponse = ServerMessage
```

## Exemplos

```json
{
    "message": "..."
}
```
