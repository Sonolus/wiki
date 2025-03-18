# Entity Memory

Entity Memory block is used as generic memory storage.

## Identifier

```ts
const EntityMemoryId = 4000
```

## Values

| Index | Initial Value | Description    |
| ----- | ------------- | -------------- |
| 0-63  | 0             | Generic memory |

See Entity Info block.

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |   ✔   |
| `spawnOrder`       |  ✔   |   ✔   |
| `shouldSpawn`      |  ✔   |   ✔   |
| `initialize`       |  ✔   |   ✔   |
| `updateSequential` |  ✔   |   ✔   |
| `touch`            |  ✔   |   ✔   |
| `updateParallel`   |  ✔   |   ✔   |
| `terminate`        |  ✔   |   ✔   |
