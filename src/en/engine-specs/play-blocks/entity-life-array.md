# Entity Life Array

Entity Life Array block contains life configuration of each entity.

## Identifier

```ts
const EntityLifeArrayId = 4107
```

## Values

| Index | Initial Value | Description        |
| ----- | ------------- | ------------------ |
| 0-3   | ?             | Life of 0th entity |
| 4-7   | ?             | Life of 1st entity |
| 8-11  | ?             | Life of 2nd entity |
| ...   | ...           | ...                |

See Entity Life block.

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
