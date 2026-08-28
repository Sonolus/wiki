# Engine Configuration Option Category

Engine configuration option category is used by Sonolus app to populate categories in options section in level and engine configuration interface.

## Syntax

```ts
type EngineConfigurationOptionCategory = {
    name: string
    title: Text | (string & {})
}
```

## Examples

```json
{
    "name": "gameplay",
    "title": "#GAMEPLAY"
}
```
