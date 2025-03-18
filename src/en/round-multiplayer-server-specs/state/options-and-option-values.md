# `options` and `optionValues`

Room options and values.

## Syntax

```ts
type Options = ServerForm[]

type OptionValues = string
```

### `optionValues`

Serialized query parameters of `options`, for example `"type=casual&round=3"`.

## Remarks

Client will raise a fatal error if:

-   `optionValues` is not a valid value for `options`.
