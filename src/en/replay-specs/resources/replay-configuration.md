# Replay Configuration

Replay configuration is used by Sonolus app to populate replay configuration interface.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type ReplayConfiguration = {
    options: number[]
    optionNames?: (Text | (string & {}))[]
}
```

### `options`

Engine option values.

### `optionNames`.

Engine option names.

This is only available since Sonolus `1.1.0`.

## Examples

```json
{
    "options": [
        // ...
    ]
}
```
