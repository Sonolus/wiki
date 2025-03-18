# Runtime Update

Runtime Update block contains runtime information of current frame and updates every frame.

## Identifier

```ts
const RuntimeUpdateId = 1001
```

## Values

| Index | Initial Value | Description               |
| ----- | ------------- | ------------------------- |
| 0     | ?             | Time                      |
| 1     | ?             | Delta time                |
| 2     | ?             | Scaled time               |
| 3     | ?             | Skip: `1` = Yes, `0` = No |

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
