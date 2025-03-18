# `Play`

Play an effect clip with low latency.

## Arguments

| Argument | Description                                            |
| -------- | ------------------------------------------------------ |
| id       | Clip identifier                                        |
| distance | Minimum time distance from last play of the same clip. |

## Return

`0`.

## Remarks

The clip is played at the lowest latency possible immediately, with no guarantee for consistent latency for multiple `Play` function calls.
