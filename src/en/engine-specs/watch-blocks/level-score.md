# Level Score

Level Score block contains configuration for arcade scoring.

## Identifier

```ts
const LevelScoreId = 2004
```

## Values

| Index | Initial Value | Description                          |
| ----- | ------------- | ------------------------------------ |
| 0     | 0             | Perfect score multiplier             |
| 1     | 0             | Great score multiplier               |
| 2     | 0             | Good score multiplier                |
| 3     | 0             | Consecutive Perfect score multiplier |
| 4     | 0             | Consecutive Perfect score step       |
| 5     | 0             | Consecutive Perfect score cap        |
| 6     | 0             | Consecutive Great score multiplier   |
| 7     | 0             | Consecutive Great score step         |
| 8     | 0             | Consecutive Great score cap          |
| 9     | 0             | Consecutive Good score multiplier    |
| 10    | 0             | Consecutive Good score step          |
| 11    | 0             | Consecutive Good score cap           |

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

## Remarks

Arcade score per note is calculated as:

```
score = judgmentMultiplier * (consecutiveJudgmentMultiplier + archetypeMultiplier + entityMultiplier)
```

Arcade scoring normalizes maximum score to `1,000,000`, thus score multipliers are relative to each other.

Consecutive score multiplier accumulates for every step reached, up to cap. For example using consecutive Perfect score, a multiplier of `0.01`, a step of `10`, and a cap of `50`, will result in increasing Perfect score by `0.01` for every `10` consecutive Perfects reached, up to maximum of `50` consecutive Perfects.
