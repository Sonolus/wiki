# `ServerOption`

`ServerOption` provides an option, and is used by Sonolus app to populate an option in various interfaces such as search.

## Syntax

```ts
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

type ItemType =
    | 'post'
    | 'playlist'
    | 'level'
    | 'skin'
    | 'background'
    | 'effect'
    | 'particle'
    | 'engine'
    | 'replay'
    | 'room'
```

### `query`

Name of query parameter used to identify the option.

### `required`

If `true`, player is required to modify the value.

## Examples

```json
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
}
```

```json
{
    "query": "minRating",
    "name": "#RATING_MINIMUM",
    "required": false,
    "type": "slider",
    "def": 0,
    "min": 0,
    "max": 100,
    "step": 1
}
```

```json
{
    "query": "random",
    "name": "#RANDOM",
    "required": false,
    "type": "toggle",
    "def": false
}
```

```json
{
    "query": "genre",
    "name": "#GENRE",
    "required": false,
    "type": "select",
    "def": "...",
    "values": [
        // ...
    ]
}
```

```json
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
```

When user submits, the following query parameters will be sent:

```
keywords=expert
```

```
minRating=75
```

```
random=1
```

```
genre=pop
```

```
difficulty=easy,normal,hard
```
