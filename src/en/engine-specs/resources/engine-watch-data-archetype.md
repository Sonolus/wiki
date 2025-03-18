# Engine Watch Data Archetype

Engine watch data archetype is used by level to populate entities in watch mode.

## Syntax

```ts
type EngineWatchDataArchetype = {
    name: EngineArchetypeName | (string & {})
    hasInput: boolean
    preprocess?: EngineWatchDataArchetypeCallback
    spawnTime?: EngineWatchDataArchetypeCallback
    despawnTime?: EngineWatchDataArchetypeCallback
    initialize?: EngineWatchDataArchetypeCallback
    updateSequential?: EngineWatchDataArchetypeCallback
    updateParallel?: EngineWatchDataArchetypeCallback
    terminate?: EngineWatchDataArchetypeCallback
    imports: {
        name: EngineArchetypeDataName | (string & {})
        index: number
    }[]
}

type EngineWatchDataArchetypeCallback = {
    index: number
    order?: number
}
```

### `name`

Name of this archetype, which will be referenced by entities in level data.

Special archetype names will have its effect applied automatically:

-   `#BPM_CHANGE`: Signals a BPM change and will affect BPM change related functions. Entity with this archetype must also provide data named `#BEAT` and `#BPM`.

-   `#TIMESCALE_CHANGE`: Signals a time scale change and will affect time scale change related functions. Entity with this archetype must also provide data named `#BEAT` and `#TIMESCALE`.

### `hasInput`

If true, Sonolus will treat entities with this archetype to be playable entities, and will contribute to judgment, combo, life, score, etc.

### `imports`

Imported data to be inject into Entity Data block.

Imported data with matching `name` will be injected at `index` of Entity Data block.

Special imported data names are available:

-   `#JUDGMENT`: When watching a replay, will be populated with replay's judgment values.

-   `#ACCURACY`: When watching a replay, will be populated with replay's accuracy values.

### `EngineWatchDataArchetypeCallback.index`

Index of entry node in `nodes` array.

## Example

```json
{
    "name": "TapNote",
    "hasInput": true,
    "preprocess": {
        "index": 0,
        "order": 0
    },
    "imports": [
        {
            "name": "#BEAT",
            "index": 0
        }
    ]
}
```
