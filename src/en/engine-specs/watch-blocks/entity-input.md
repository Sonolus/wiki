# Entity Input

Entity Input block is used by entities to pass input information back to Sonolus.

## Identifier

```ts
const EntityInputId = 4004
```

## Values

| Index | Initial Value | Description                                                                                         |
| ----- | ------------- | --------------------------------------------------------------------------------------------------- |
| 0     | 0             | Target time of the entity                                                                           |
| 1     | -1            | Assigned bucket of the entity: `-1` = None, `0` = 0th bucket, `1`= 1st bucket, `2`= 2nd bucket, etc |
| 2     | 0             | Bucket value of the entity                                                                          |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnTime`        |  ✔   |   ✔   |
| `despawnTime`      |  ✔   |   ✔   |
| `initialize`       |  ✔   |   ✔   |
| `updateSequential` |  ✔   |   ✔   |
| `updateParallel`   |  ✔   |   ✔   |
| `terminate`        |  ✔   |   ✔   |
| `updateSpawn`      |  ✔   |  ❌   |

## Remarks

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
