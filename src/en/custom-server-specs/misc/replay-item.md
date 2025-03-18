# `ReplayItem`

`ReplayItem` provides information of a replay.

## Syntax

```ts
type ReplayItem = {
    name: string
    source?: string
    version: 1
    title: string
    subtitle: string
    author: string
    tags: Tag[]
    level: LevelItem
    data: SRL
    configuration: SRL
}
```

### `name`

Unique name which identifies the replay.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

## Examples

```json
{
    "name": "...",
    "version": 1,
    "title": "FC / 987654321",
    "subtitle": "432 / 1 / 0 / 0",
    "author": "Player#0000",
    "tags": [
        // ...
    ],
    "level": {
        // ...
    },
    "data": {
        // ...
    },
    "configuration": {
        // ...
    }
}
```
