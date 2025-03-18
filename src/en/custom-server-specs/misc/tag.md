# `Tag`

`Tag` provides information of a tag.

## Syntax

```ts
type Tag = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
}
```

## Examples

```json
{
    "tag": "Liked",
    "icon": "heart"
}
```
