# Engine Configuration

Engine configuration is used by Sonolus app to populate level and engine configuration interface.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type EngineConfiguration = {
    options: EngineConfigurationOption[]
    ui: EngineConfigurationUI
}
```

## Examples

```json
{
    "options": [
        // ...
    ],
    "ui": {
        // ...
    }
}
```
