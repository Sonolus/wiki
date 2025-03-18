# Runtime Background

Runtime Background block contains quad coordinates of background image.

## Identifier

```ts
const RuntimeBackgroundId = 1005
```

## Values

| Index | Initial Value | Description |
| ----- | ------------- | ----------- |
| 0     | ?             | X1          |
| 1     | ?             | Y1          |
| 2     | ?             | X2          |
| 3     | ?             | Y2          |
| 4     | ?             | X3          |
| 5     | ?             | Y3          |
| 6     | ?             | X4          |
| 7     | ?             | Y4          |

Points are in the order of bottom-left, top-left, top-right, bottom-right.

Values are initialized based on background's configuration.

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
