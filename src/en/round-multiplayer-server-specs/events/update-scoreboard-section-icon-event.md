# `UpdateScoreboardSectionIconEvent`

## Message

```ts
type UpdateScoreboardSectionIconEvent = {
    type: 'updateScoreboardSectionIcon'
    index: number
    icon?: Icon
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Update icon of section specified by `index` to `icon`.
