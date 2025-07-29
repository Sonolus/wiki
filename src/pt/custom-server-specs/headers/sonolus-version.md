# `Sonolus-Version`

`Sonolus-Version` especifica a versão do aplicativo Sonolus que o servidor suporta.

## Sintaxe

```http
Sonolus-Version: <value>
```

## Exemplos

```http
Sonolus-Version: 0.8.0
```

## Observações

Quando um jogador com uma versão não suportada do aplicativo Sonolus tenta entrar no servidor, um prompt é apresentado para informar o jogador e a entrada é abortada.

Embora esse cabeçalho seja opcional, é altamente recomendável garantir que os jogadores que usam o servidor tenham a melhor experiência pretendida.
