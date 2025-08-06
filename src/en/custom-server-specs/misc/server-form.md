# `ServerForm`

`ServerForm` provides a form, and is used by Sonolus app to populate various interfaces such as search.

## Syntax

```ts
type ServerForm = {
    type: string
    title: Text | (string & {})
    icon?: Icon | (string & {})
    description?: string
    help?: string
    requireConfirmation: boolean
    options: ServerOption[]
}
```

## Examples

```json
{
    "type": "advanced",
    "title": "#ADVANCED",
    "requireConfirmation": false,
    "options": [
        // ...
    ]
}
```

When user submits, the following query parameters will be sent:

```
?type=advanced&...
```
