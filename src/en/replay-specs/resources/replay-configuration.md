# Replay Configuration

Replay configuration is used by Sonolus app to populate replay configuration interface.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type ReplayConfiguration = {
    options: number[]
}
```

### `options`

Engine option values.

## Examples

```json
{
    "options": [
        // ...
    ]
}
```
