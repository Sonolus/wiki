# `UpdateScoreboardSectionTitleEvent`

## Message

```ts
type UpdateScoreboardSectionTitleEvent = {
    type: 'updateScoreboardSectionTitle'
    index: number
    title: Text | (string & {})
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if section specified by `index` does not exist.
-   Update title of section specified by `index` with `title`.
