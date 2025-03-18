# Runtime UI

Runtime UI block is used to pass UI layout information back to Sonolus.

## Identifier

```ts
const RuntimeUIId = 1005
```

## Values

| Index | Initial Value | Description                                     |
| ----- | ------------- | ----------------------------------------------- |
| 0-9   | 0             | Layout information of menu UI                   |
| 10-19 | 0             | Layout information of judgment UI               |
| 20-29 | 0             | Layout information of combo value UI            |
| 30-39 | 0             | Layout information of combo text UI             |
| 40-49 | 0             | Layout information of primary metric bar UI     |
| 50-59 | 0             | Layout information of primary metric value UI   |
| 60-69 | 0             | Layout information of secondary metric bar UI   |
| 70-79 | 0             | Layout information of secondary metric value UI |
| 80-89 | 0             | Layout information of progress UI               |

For each UI:

| Index         | Initial Value | Description                                              |
| ------------- | ------------- | -------------------------------------------------------- |
| UI offset + 0 | 0             | Anchor X                                                 |
| UI offset + 1 | 0             | Anchor Y                                                 |
| UI offset + 2 | 0             | Pivot X                                                  |
| UI offset + 3 | 0             | Pivot Y                                                  |
| UI offset + 4 | 0             | Width                                                    |
| UI offset + 5 | 0             | Height                                                   |
| UI offset + 6 | 0             | Rotation                                                 |
| UI offset + 7 | 0             | Alpha                                                    |
| UI offset + 8 | 0             | Horizontal align: `-1` = Left, `0` = Center, `1` = Right |
| UI offset + 9 | 0             | Background                                               |

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

It is recommended to adjust UI layout based on various factors such as screen aspect ratio, options, and Runtime UI Configuration.
