# Level Memory

Level Memory block is used as generic memory storage.

## Identifier

```ts
const LevelMemoryId = 2000
```

## Values

| Index  | Initial Value | Description    |
| ------ | ------------- | -------------- |
| 0-4095 | 0             | Generic memory |

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
