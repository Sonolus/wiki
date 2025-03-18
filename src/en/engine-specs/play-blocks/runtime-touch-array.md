# Runtime Touch Array

Runtime Touch Array block contains touch information of current frame and updates every frame.

## Identifier

```ts
const RuntimeTouchArrayId = 1002
```

## Values

| Index | Initial Value | Description              |
| ----- | ------------- | ------------------------ |
| 0-14  | ?             | Information of 0th touch |
| 15-29 | ?             | Information of 1st touch |
| 30-44 | ?             | Information of 2nd touch |
| ...   | ...           | ...                      |

For each touch:

| Index             | Initial Value | Description                                                                                 |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------- |
| Touch offset + 0  | ?             | Touch identifier                                                                            |
| Touch offset + 1  | ?             | Touch started: `1` = Yes, `0` = No                                                          |
| Touch offset + 2  | ?             | Touch ended: `1` = Yes, `0` = No                                                            |
| Touch offset + 3  | ?             | Touch t: time of touch event reported by operating system, with input offset accounted for  |
| Touch offset + 4  | ?             | Touch st: start time of touch reported by operating system, with input offset accounted for |
| Touch offset + 5  | ?             | Touch x: x of touch's current position                                                      |
| Touch offset + 6  | ?             | Touch y: y of touch's current position                                                      |
| Touch offset + 7  | ?             | Touch sx: x of touch's starting position                                                    |
| Touch offset + 8  | ?             | Touch sy: y of touch's starting position                                                    |
| Touch offset + 9  | ?             | Touch dx: delta x of touch's position since last update cycle                               |
| Touch offset + 10 | ?             | Touch dy: delta y of touch's position since last update cycle                               |
| Touch offset + 11 | ?             | Touch vx: x of touch's velocity                                                             |
| Touch offset + 12 | ?             | Touch vy: y of touch's velocity                                                             |
| Touch offset + 13 | ?             | Touch vr: r of touch's velocity                                                             |
| Touch offset + 14 | ?             | Touch vw: w of touch's velocity                                                             |

## Access

| Callback           | Read | Write |
| ------------------ | :--: | :---: |
| `preprocess`       |  ✔   |  ❌   |
| `spawnOrder`       |  ✔   |  ❌   |
| `shouldSpawn`      |  ✔   |  ❌   |
| `initialize`       |  ✔   |  ❌   |
| `updateSequential` |  ✔   |  ❌   |
| `touch`            |  ✔   |  ❌   |
| `updateParallel`   |  ✔   |  ❌   |
| `terminate`        |  ✔   |  ❌   |
