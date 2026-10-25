# Engine Preview Data

Engine preview data is used by Sonolus app to drive a level's preview.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type EnginePreviewData = {
    skin: {
        renderMode?: 'default' | 'standard' | 'lightweight'
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    archetypes: EnginePreviewDataArchetype[]
    nodes: EngineDataNode[]
    entityDataLength?: number
    entitySharedMemoryLength?: number
}
```

### `skin.renderMode`

Render mode.

When not specified or `'default'`, will use user's settings; otherwise use specified render mode.

### `entityDataLength`

Optional length of Entity Data and Entity Data Array block.

### `entitySharedMemoryLength`

Optional length of Entity Shared Memory and Entity Shared Memory Array block.

## Examples

```json
{
    "skin": {
        "sprites": [
            {
                "name": "#NOTE_HEAD_CYAN",
                "id": 0
            }
        ]
    },
    "archetypes": [
        // ...
    ],
    "nodes": [
        // ...
    ]
}
```
