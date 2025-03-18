# `UpdateOptionValuesEvent`

## Message

```ts
type UpdateOptionValuesEvent = {
    type: 'updateOptionValues'
    optionValues: string
}
```

## Remarks

Upon receiving, client will:

-   Update option values to `optionValues`.
