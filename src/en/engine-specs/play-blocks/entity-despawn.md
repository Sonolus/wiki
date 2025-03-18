# Entity Despawn

Entity Despawn block is used by entities to pass despawn information back to Sonolus.

## Identifier

```ts
const EntityDespawnId = 4004
```

## Values

| Index | Initial Value | Description                      |
| ----- | ------------- | -------------------------------- |
| 0     | 0             | Despawn: `0` = No, otherwise Yes |

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

## Remarks

When despawn value is truthy at end of current frame, it will be despawned.
