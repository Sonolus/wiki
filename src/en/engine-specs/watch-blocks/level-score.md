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

Arcade scoring normalizes maximum score to `1,000,000`, thus Perfect, Great, and Good score multipliers are relative to each other. For example, the following two multiplier setups are equivalent:

-   Perfect: `1`, Great: `0.8`, Good: `0.5`.
-   Perfect: `100`, Great: `80`, Good: `50`.

Consecutive score multiplier accumulates for every step reached, up to cap. For example using consecutive Perfect score, a multiplier of `0.01`, a step of `10`, and a cap of `50`, will result in increasing Perfect score by `0.01` for every `10` consecutive Perfects reached, up to maximum of `50` consecutive Perfects.
