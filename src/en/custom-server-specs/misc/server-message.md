# `ServerMessage`

`ServerMessage` provides a message for Sonolus app to display.

## Syntax

```ts
type ServerMessage = {
    message?: string
}
```

## Examples

```json
{
    "message": "..."
}
```

## Remarks

For error responses of all server endpoints and resources, `ServerMessage` can be optionally returned.
