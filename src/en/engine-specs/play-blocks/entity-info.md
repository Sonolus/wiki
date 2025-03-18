# Entity Info

Entity Info block contains state information of the entity.

## Identifier

```ts
const EntityInfoId = 4003
```

## Values

| Index | Initial Value | Description                                                       |
| ----- | ------------- | ----------------------------------------------------------------- |
| 0     | ?             | Index of the entity                                               |
| 1     | ?             | Archetype of the entity                                           |
| 2     | ?             | State of the entity: `0` = Waiting, `1` = Active, `2` = Despawned |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |  ❌   |
| `spawnOrder`       |  ✔   |  ❌   |
| `shouldSpawn`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `touch`            |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |

## Remarks

Entity Info is simply a view into Entity Info Array.

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
