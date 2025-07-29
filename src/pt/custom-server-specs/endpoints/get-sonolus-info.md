# `GET /sonolus/info`

`/sonolus/info` fornece informações do servidor e é usado pelo aplicativo Sonolus para preencher a página inicial do servidor.

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
type ServerInfo = {
    title: string
    description?: string
    buttons: ServerInfoButton[]
    configuration: ServerConfiguration
    banner?: Srl
}

type ServerInfoButton = {
    type:
        | 'authentication'
        | 'multiplayer'
        | 'post'
        | 'playlist'
        | 'level'
        | 'replay'
        | 'skin'
        | 'background'
        | 'effect'
        | 'particle'
        | 'engine'
        | 'configuration'
}

type ServerConfiguration = {
    options: ServerOption[]
}
```

### `configuration.options`

Opções de configuração.

Se modificado pelo cliente, o cliente anexará valores modificados a cada solicitação.

## Exemplos

```json
{
    "title": "My Server Title",
    "description": "Description of my server.",
    "buttons": [
        // ...
    ],
    "configuration": {
        "options": [
            // ...
        ]
    },
    "banner": {
        // ...
    }
}
```
