# `ServerMessage`

`ServerMessage` fornece uma mensagem para o aplicativo Sonolus exibir.

## Sintaxe

```ts
type ServerMessage = {
    message?: string
}
```

## Exemplos

```json
{
    "message": "..."
}
```

## Observações

Para respostas de erro de todos os pontos de extremidade e recursos do servidor, `ServerMessage` pode ser retornado opcionalmente.
