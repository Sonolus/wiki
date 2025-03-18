# Entity Info Array

Entity Info Array block contains state information of entities.

## Identifier

```ts
const EntityInfoArrayId = 4103
```

## Values

| Index | Initial Value | Description                     |
| ----- | ------------- | ------------------------------- |
| 0-2   | ?             | State information of 0th entity |
| 3-5   | ?             | State information of 1st entity |
| 6-8   | ?             | State information of 2nd entity |
| ...   | ...           | ...                             |

See Entity Info block.

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
