# Engine Play Data

Engine play data is used by Sonolus app to drive a level's gameplay.

## Resource Type

JSON resource.

`.json` is the only supported format, and must also be GZip compressed.

## Syntax

```ts
type EnginePlayData = {
    skin: {
        renderMode?: 'default' | 'standard' | 'lightweight'
        sprites: {
            name: SkinSpriteName | (string & {})
            id: number
        }[]
    }
    effect: {
        clips: {
            name: EffectClipName | (string & {})
            id: number
        }[]
    }
    particle: {
        effects: {
            name: ParticleEffectName | (string & {})
            id: number
        }[]
    }
    buckets: EngineDataBucket[]
    archetypes: EnginePlayDataArchetype[]
    nodes: EngineDataNode[]
}
```

### `skin.renderMode`

Render mode.

When not specified or `'default'`, will use user's settings; otherwise use specified render mode.

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
    "effect": {
        "clips": [
            {
                "name": "#PERFECT",
                "id": 0
            }
        ]
    },
    "particle": {
        "effects": [
            {
                "name": "#NOTE_CIRCULAR_TAP_CYAN",
                "id": 0
            }
        ]
    },
    "buckets": [
        // ...
    ],
    "archetypes": [
        // ...
    ],
    "nodes": [
        // ...
    ]
}
```
