# Level Life

Level Life block contains configuration for life system.

## Identifier

```ts
const LevelLifeId = 2005
```

## Values

| Index | Initial Value | Description                        |
| ----- | ------------- | ---------------------------------- |
| 0     | 0             | Consecutive Perfect life increment |
| 1     | 0             | Consecutive Perfect life step      |
| 2     | 0             | Consecutive Great life increment   |
| 3     | 0             | Consecutive Great life step        |
| 4     | 0             | Consecutive Good life increment    |
| 5     | 0             | Consecutive Good life step         |

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

## Remarks

Player starts every level with `1,000` life. Upon reaching `0`, the level is considered failed (player can still continue playing).

Consecutive life increment applies for every step reached, as long as the level is not failed. For example using consecutive Perfect life, an increment of `10` and a step of `50`, will result in increasing life by `10` for every `50` consecutive Perfects reached.
