# Entity Data

Entity Data block is used as generic data storage.

## Identifier

```ts
const EntityDataId = 4001
```

## Values

| Index | Initial Value | Description  |
| ----- | ------------- | ------------ |
| 0-31  | ?             | Generic data |

Values are initially set to all 0, and `entity.data` will be injected according to `archetype.data`.

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnOrder`       |  ✔   |  ❌   |
| `shouldSpawn`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `touch`            |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |

## Remarks

Entity Data is simply a view into Entity Data Array.

For entities spawned by `Spawn` function call, it does not have any data and cannot access this block.
