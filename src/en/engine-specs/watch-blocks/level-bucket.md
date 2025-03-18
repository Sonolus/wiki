# Level Bucket

Level Bucket block contains information of buckets.

## Identifier

```ts
const LevelBucketId = 2003
```

## Values

| Index | Initial Value | Description                      |
| ----- | ------------- | -------------------------------- |
| 0-5   | 0             | Bucket information of 0th bucket |
| 6-11  | 0             | Bucket information of 1st bucket |
| 12-17 | 0             | Bucket information of 2nd bucket |
| ...   | ...           | ...                              |

For each bucket:

| Index             | Initial Value | Description            |
| ----------------- | ------------- | ---------------------- |
| Bucket offset + 0 | 0             | Minimum Perfect window |
| Bucket offset + 1 | 0             | Maximum Perfect window |
| Bucket offset + 2 | 0             | Minimum Great window   |
| Bucket offset + 3 | 0             | Maximum Great window   |
| Bucket offset + 4 | 0             | Minimum Good window    |
| Bucket offset + 5 | 0             | Maximum Good window    |

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
