# Engine Rom

Engine Rom block contains read only memory provided by engine.

## Identifier

```ts
const EngineRomId = 3000
```

## Values

| Index | Initial Value | Description          |
| ----- | ------------- | -------------------- |
| 0     | ?             | Value of 0th element |
| 1     | ?             | Value of 1st element |
| 2     | ?             | Value of 2nd element |
| ...   | ...           | ...                  |

Values are read from engine rom resource.

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

## Remarks

Engine Rom provides an efficient way to store and use large amount of data for engines with such a need.
