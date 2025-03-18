# `Print`

Print a value as text.

## Arguments

| Argument        | Description                                              |
| --------------- | -------------------------------------------------------- |
| value           | Value                                                    |
| format          | Format                                                   |
| decimalPlaces   | Decimal places (`-1` = auto)                             |
| anchorX         | Anchor X                                                 |
| anchorY         | Anchor Y                                                 |
| pivotX          | Pivot X                                                  |
| pivotY          | Pivot Y                                                  |
| width           | Width                                                    |
| height          | Height                                                   |
| rotation        | Rotation                                                 |
| color           | Color                                                    |
| alpha           | Alpha                                                    |
| horizontalAlign | Horizontal align: `-1` = Left, `0` = Center, `1` = Right |
| background      | Background                                               |

### Format

| Value | Description  |
| ----- | ------------ |
| 0     | Number       |
| 1     | Percentage   |
| 10    | Time         |
| 11    | Score        |
| 20    | BPM          |
| 21    | TimeScale    |
| 30    | BeatCount    |
| 31    | MeasureCount |
| 32    | EntityCount  |

### Color

| Value | Description |
| ----- | ----------- |
| -1    | Theme       |
| 0     | Neutral     |
| 1     | Red         |
| 2     | Green       |
| 3     | Blue        |
| 4     | Yellow      |
| 5     | Purple      |
| 6     | Cyan        |

## Return

`0`.

## Remarks

Only available in preview.
