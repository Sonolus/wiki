# `Tag`

`Tag` fornece informações de uma tag.

## Sintaxe

```ts
type Tag = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
}
```

## Exemplos

```json
{
    "tag": "Liked",
    "icon": "heart"
}
```
