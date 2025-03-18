# `PlayScheduled`

Play an effect clip precisely at a scheduled time in the future.

## Arguments

| Argument | Description                                            |
| -------- | ------------------------------------------------------ |
| id       | Clip identifier                                        |
| time     | Time                                                   |
| distance | Minimum time distance from last play of the same clip. |

## Return

`0`.

## Remarks

`PlayScheduled` automatically accounts for audio offset to sync up with BGM timeline.

To ensure that the clip is played at the scheduled time, it must be scheduled at least 0.5 seconds in advance.
