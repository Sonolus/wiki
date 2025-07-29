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

type ServerOption =
    | ServerTextOption
    | ServerTextAreaOption
    | ServerSliderOption
    | ServerToggleOption
    | ServerSelectOption
    | ServerMultiOption
    | ServerServerItemOption
    | ServerServerItemsOption
    | ServerCollectionItemOption
    | ServerFileOption

type ServerTextOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'text'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

type ServerTextAreaOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'textArea'
    def: string
    placeholder: Text | (string & {})
    limit: number
    shortcuts: string[]
}

type ServerSliderOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'slider'
    def: number
    min: number
    max: number
    step: number
    unit?: Text | (string & {})
}

type ServerToggleOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'toggle'
    def: boolean
}

type ServerSelectOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'select'
    def: string
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

type ServerMultiOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'multi'
    def: boolean[]
    values: {
        name: string
        title: Text | (string & {})
    }[]
}

type ServerServerItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItem'
    itemType: ItemType
    def: Sil | null
    allowOtherServers: boolean
}

type ServerServerItemsOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'serverItems'
    itemType: ItemType
    def: Sil[]
    allowOtherServers: boolean
    limit: number
}

type ServerCollectionItemOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'collectionItem'
    itemType: ItemType
}

type ServerFileOption = {
    query: string
    name: Text | (string & {})
    description?: string
    required: boolean
    type: 'file'
    def: string
}
```

### `query`

Nome do parâmetro de consulta usado para identificar a opção.

### `required`

Se `true` , o jogador deverá modificar o valor.

## Exemplos

```json
{
    "type": "advanced",
    "title": "#ADVANCED",
    "requireConfirmation": false,
    "options": [
        {
            "query": "keywords",
            "name": "#KEYWORDS",
            "required": false,
            "type": "text",
            "def": "",
            "placeholder": "#KEYWORDS",
            "limit": 10,
            "shortcuts": [
                // ...
            ]
        },
        {
            "query": "minRating",
            "name": "#RATING_MINIMUM",
            "required": false,
            "type": "slider",
            "def": 0,
            "min": 0,
            "max": 100,
            "step": 1
        },
        {
            "query": "random",
            "name": "#RANDOM",
            "required": false,
            "type": "toggle",
            "def": false
        },
        {
            "query": "genre",
            "name": "#GENRE",
            "required": false,
            "type": "select",
            "def": "...",
            "values": [
                // ...
            ]
        },
        {
            "query": "difficulty",
            "name": "#DIFFICULTY",
            "required": false,
            "type": "multi",
            "def": [
                // ...
            ],
            "values": [
                // ...
            ]
        }
    ]
}
```

Quando o usuário enviar, os seguintes parâmetros de consulta serão enviados:

```
?type=advanced&keywords=expert&minRating=75&random=1&genre=pop&difficulty=easy,normal,hard
```
