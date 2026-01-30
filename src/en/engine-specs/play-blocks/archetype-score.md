# Archetype Score

Archetype Score block contains arcade score configuration of each archetype.

## Identifier

```ts
const ArchetypeScoreId = 5001
```

## Values

| Index | Initial Value | Description                    |
| ----- | ------------- | ------------------------------ |
| 0     | 1             | Configuration of 0th archetype |
| 1     | 1             | Configuration of 1st archetype |
| 2     | 1             | Configuration of 2nd archetype |
| ...   | ...           | ...                            |

For each archetype:

| Index                | Initial Value | Description |
| -------------------- | ------------- | ----------- |
| Archetype offset + 0 | 1             | Multiplier  |

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
