# `Sonolus-Session`

`Sonolus-Session` especifica a sessão atual.

## Sintaxe

```http
Sonolus-Session: <value>
```

## Exemplos

```http
Sonolus-Session: ...
```

## Observações

A sessão é a mesma retornada por [`POST /sonolus/authenticate`](../endpoints/post-sonolus-authenticate) .

Usando a sessão, o servidor pode servir conteúdo personalizado.
