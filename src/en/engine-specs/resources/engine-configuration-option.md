# Engine Configuration Option

Engine configuration option is used by Sonolus app to populate options section in level and engine configuration interface.

## Syntax

```ts
type EngineConfigurationOption =
    | EngineConfigurationSliderOption
    | EngineConfigurationToggleOption
    | EngineConfigurationSelectOption

type EngineConfigurationSliderOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

type EngineConfigurationToggleOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'toggle'
    def: 0 | 1
}

type EngineConfigurationSelectOption = {
    name: Text | (string & {})
    description?: string
    standard?: boolean
    advanced?: boolean
    scope?: string
    type: 'select'
    def: number
    values: (Text | (string & {}))[]
}
```

### `name`

Standardized option names starts with `#` and will be translated into client language when displayed.

Special options names will have its effect applied automatically:

-   `#SPEED`: Change speed of BGM and BPM values.

### `standard`

Whether this option is considered as a standard option.

A standard option, when changed to other than default value, will significantly alter the level's gameplay and is considered not the intended way to play this level.

When a standard option is changed to other than default value, it will be stated in the end result screen.

### `scope`

Option values are automatically saved and shared between all levels. When a saved value matching the scope and name exists, it will be recalled.

Without specifying a scope, option values will be saved only for this level.

### `values`

Standardized option values starts with `#` and will be translated into client language when displayed.

## Examples

```json
{
    "name": "#SPEED",
    "standard": true,
    "type": "slider",
    "def": 1,
    "min": 0.5,
    "max": 2,
    "step": 0.05,
    "unit": "#PERCENTAGE_UNIT"
}
```
