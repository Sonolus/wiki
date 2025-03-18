# Entity Info

Entity Info block contains state information of the entity.

## Identifier

```ts
const EntityInfoId = 4003
```

## Values

| Index | Initial Value | Description                                       |
| ----- | ------------- | ------------------------------------------------- |
| 0     | ?             | Index of the entity                               |
| 1     | ?             | Archetype of the entity                           |
| 2     | ?             | State of the entity: `0` = Inactive, `1` = Active |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |  ❌   |
| `spawnTime`        |  ✔   |  ❌   |
| `despawnTime`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |
| `updateSpawn`      |  ✔   |  ❌   |

## Remarks

Entity Info is simply a view into Entity Info Array.

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
