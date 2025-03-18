# `UpdateOptionsEvent`

## Message

```ts
type UpdateOptionsEvent = {
    type: 'updateOptions'
    options: ServerForm[]
    optionValues: string
}
```

## Remarks

Upon receiving, client will:

-   Update options to `options`.
-   Update option values to `optionValues`.
