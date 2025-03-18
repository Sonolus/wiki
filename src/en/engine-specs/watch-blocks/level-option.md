# Level Option

Level Option block contains values of level options.

## Identifier

```ts
const LevelOptionId = 2002
```

## Values

| Index | Initial Value | Description               |
| ----- | ------------- | ------------------------- |
| 0     | ?             | Value of 0th level option |
| 1     | ?             | Value of 1st level option |
| 2     | ?             | Value of 2nd level option |
| ...   | ...           | ...                       |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |  ❌   |
| `spawnTime`        |  ✔   |  ❌   |
| `despawnTime`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |
| `updateSpawn`      |  ✔   |  ❌   |
