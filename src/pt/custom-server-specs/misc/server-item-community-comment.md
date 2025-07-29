# `ServerItemCommunityComment`

`ServerItemCommunityComment` fornece informações de um comentário da comunidade de itens.

## Sintaxe

```ts
type ServerItemCommunityComment = {
    name: string
    author: string
    time: number
    content: string
    actions: ServerForm[]
}
```

## Exemplos

```json
{
    "name": "...",
    "author": "Username",
    "time": 1640995200000,
    "content": "...",
    "actions": [
        // ...
    ]
}
```
