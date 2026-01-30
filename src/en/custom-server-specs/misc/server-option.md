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
    infoType?: string
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
    infoType?: string
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
    validation?:
        | ServerFileOptionValidationFile<'file'>
        | ServerFileOptionValidationImage<'image'>
        | ServerFileOptionValidationAudio<'audio'>
        | ServerFileOptionValidationZip<'zip'>
        | ServerFileOptionValidationImage<'serverBanner'>
        | ServerFileOptionValidationImage<'postThumbnail'>
        | ServerFileOptionValidationImage<'playlistThumbnail'>
        | ServerFileOptionValidationImage<'levelCover'>
        | ServerFileOptionValidationAudio<'levelBgm'>
        | ServerFileOptionValidationAudio<'levelPreview'>
        | ServerFileOptionValidationJson<'levelData'>
        | ServerFileOptionValidationImage<'skinThumbnail'>
        | ServerFileOptionValidationJson<'skinData'>
        | ServerFileOptionValidationImage<'skinTexture'>
        | ServerFileOptionValidationImage<'backgroundThumbnail'>
        | ServerFileOptionValidationImage<'backgroundImage'>
        | ServerFileOptionValidationJson<'backgroundData'>
        | ServerFileOptionValidationJson<'backgroundConfiguration'>
        | ServerFileOptionValidationImage<'effectThumbnail'>
        | ServerFileOptionValidationJson<'effectData'>
        | ServerFileOptionValidationZip<'effectAudio'>
        | ServerFileOptionValidationImage<'particleThumbnail'>
        | ServerFileOptionValidationJson<'particleData'>
        | ServerFileOptionValidationImage<'particleTexture'>
        | ServerFileOptionValidationImage<'engineThumbnail'>
        | ServerFileOptionValidationJson<'enginePlayData'>
        | ServerFileOptionValidationJson<'engineWatchData'>
        | ServerFileOptionValidationJson<'enginePreviewData'>
        | ServerFileOptionValidationJson<'engineTutorialData'>
        | ServerFileOptionValidationFile<'engineRom'>
        | ServerFileOptionValidationJson<'engineConfiguration'>
        | ServerFileOptionValidationJson<'replayData'>
        | ServerFileOptionValidationJson<'replayConfiguration'>
        | ServerFileOptionValidationImage<'roomCover'>
        | ServerFileOptionValidationAudio<'roomBgm'>
        | ServerFileOptionValidationAudio<'roomPreview'>
}

type ServerFileOptionValidationFile<T> = {
    type: T
    minSize?: number
    maxSize?: number
}

type ServerFileOptionValidationImage<T> = {
    type: T
    minSize?: number
    maxSize?: number
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
}

type ServerFileOptionValidationAudio<T> = {
    type: T
    minSize?: number
    maxSize?: number
    minLength?: number
    maxLength?: number
}

type ServerFileOptionValidationZip<T> = {
    type: T
    minSize?: number
    maxSize?: number
}

type ServerFileOptionValidationJson<T> = {
    type: T
    minSize?: number
    maxSize?: number
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
