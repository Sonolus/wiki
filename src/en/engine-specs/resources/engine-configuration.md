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
    replayFallbackOptionNames?: (Text | (string & {}))[]
}
```

### `replayFallbackOptionNames`

Used for supporting backwards compatibility with replays made before Sonolus `1.1.0` while modifying engine options.

This is not necessary if the engine does not modify options, or replays made before Sonolus `1.1.0` do not get replaced with a newer version of the engine with modified options.

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
