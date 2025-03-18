# `StopLoopedScheduled`

Stop a looping effect clip instance precisely at a scheduled time in the future.

## Arguments

| Argument | Description                     |
| -------- | ------------------------------- |
| loopId   | Effect clip instance identifier |
| endTime  | End time                        |

## Return

`0`.

## Remarks

`StopLoopedScheduled` automatically accounts for audio offset to sync up with BGM timeline.

To ensure that the clip stops looping at the scheduled time, it must be scheduled at least 0.5 seconds in advance.
