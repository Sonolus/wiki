# Entity Input

Entity Input block is used by entities to pass input information back to Sonolus.

## Identifier

```ts
const EntityInputId = 4005
```

## Values

| Index | Initial Value | Description                                                                                         |
| ----- | ------------- | --------------------------------------------------------------------------------------------------- |
| 0     | 0             | Judgment of the entity: `0` = Miss, `1` = Perfect, `2` = Great, `3` = Good                          |
| 1     | 0             | Accuracy of the entity                                                                              |
| 2     | -1            | Assigned bucket of the entity: `-1` = None, `0` = 0th bucket, `1`= 1st bucket, `2`= 2nd bucket, etc |
| 3     | 0             | Bucket value of the entity                                                                          |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnOrder`       |  ✔   |   ✔   |
| `shouldSpawn`      |  ✔   |   ✔   |
| `initialize`       |  ✔   |   ✔   |
| `updateSequential` |  ✔   |   ✔   |
| `touch`            |  ✔   |   ✔   |
| `updateParallel`   |  ✔   |   ✔   |
| `terminate`        |  ✔   |   ✔   |

## Remarks

When an entity is despawned, values of Entity Input block will be used by Sonolus to process judgment, combo, life, score, etc.

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
