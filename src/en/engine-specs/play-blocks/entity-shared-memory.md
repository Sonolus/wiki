# Entity Shared Memory

Entity Shared Memory block is used as generic memory storage that are accessible by other entities.

## Identifier

```ts
const EntitySharedMemoryId = 4002
```

## Values

| Index | Initial Value | Description    |
| ----- | ------------- | -------------- |
| 0-31  | 0             | Generic memory |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnOrder`       |  ✔   |  ❌   |
| `shouldSpawn`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |   ✔   |
| `touch`            |  ✔   |   ✔   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |

## Remarks

Entity Shared Memory is simply a view into Entity Shared Memory Array.

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
