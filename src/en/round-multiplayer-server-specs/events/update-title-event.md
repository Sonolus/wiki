# `UpdateTitleEvent`

## Message

```ts
type UpdateTitleEvent = {
    type: 'updateTitle'
    title: string
}
```

## Remarks

Upon receiving, client will:

-   Update title to `title`.
