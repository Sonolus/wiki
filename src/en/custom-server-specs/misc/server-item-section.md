# `ServerItemSection`

`ServerItemSection` provides information of a section of items.

## Syntax

```ts
type ServerItemSection =
    | ServerItemSectionTyped<'post', PostItem>
    | ServerItemSectionTyped<'playlist', PlaylistItem>
    | ServerItemSectionTyped<'level', LevelItem>
    | ServerItemSectionTyped<'skin', SkinItem>
    | ServerItemSectionTyped<'background', BackgroundItem>
    | ServerItemSectionTyped<'effect', EffectItem>
    | ServerItemSectionTyped<'particle', ParticleItem>
    | ServerItemSectionTyped<'engine', EngineItem>
    | ServerItemSectionTyped<'replay', ReplayItem>
    | ServerItemSectionTyped<'room', RoomItem>

type ServerItemSectionTyped<TItemType, TItem> = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    description?: string
    help?: string
    itemType: TItemType
    items: TItem[]
    search?: ServerForm
    searchValues?: string
}
```

### `itemType`

Determines type of items.

### `searchValues`

Optional search values.

If present, More button will be available and clicking will bring player to list with search values as queries.

### `search`

Optional search form.

If present, Search button will be available and clicking will bring up search form with `searchValues` prefilled.

## Examples

```json
{
    "title": "#RECOMMENDED",
    "itemType": "level",
    "items": [
        // levels
    ]
}
```
