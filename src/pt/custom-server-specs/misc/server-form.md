# `ServerForm`

`ServerForm` fornece um formulário e é usado pelo aplicativo Sonolus para preencher várias interfaces, como pesquisa.

## Sintaxe

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

## Exemplos

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

Quando o usuário enviar, os seguintes parâmetros de consulta serão enviados:

```
?type=advanced&...
```
