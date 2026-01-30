# Entity Life

Entity Life block contains life configuration.

## Identifier

```ts
const EntityLifeId = 4007
```

## Values

| Index | Initial Value | Description            |
| ----- | ------------- | ---------------------- |
| 0     | 0             | Perfect life increment |
| 1     | 0             | Great life increment   |
| 2     | 0             | Good life increment    |
| 3     | 0             | Miss life increment    |

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

Judgment life increment applies for judgment hit, as long as the level is not failed. For example for a particular entity, a Miss life increment of `-100` will result in reducing player life by `100` upon a Miss on this entity.
