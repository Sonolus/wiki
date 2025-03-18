# Entity Data Array

Entity Data Array block contains data of entities.

## Identifier

```ts
const EntityDataArrayId = 4101
```

## Values

| Index | Initial Value | Description        |
| ----- | ------------- | ------------------ |
| 0-31  | ?             | Data of 0th entity |
| 32-63 | ?             | Data of 1st entity |
| 64-95 | ?             | Data of 2nd entity |
| ...   | ...           | ...                |

See Entity Data block.

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnTime`        |  ✔   |  ❌   |
| `despawnTime`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |
| `updateSpawn`      |  ✔   |  ❌   |
