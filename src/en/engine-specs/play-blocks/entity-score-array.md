# Entity Score Array

Entity Score Array block contains arcade score configuration of each entity.

## Identifier

```ts
const EntityScoreArrayId = 4106
```

## Values

| Index | Initial Value | Description         |
| ----- | ------------- | ------------------- |
| 0     | ?             | Score of 0th entity |
| 1     | ?             | Score of 1st entity |
| 2     | ?             | Score of 2nd entity |
| ...   | ...           | ...                 |

See Entity Score block.

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
