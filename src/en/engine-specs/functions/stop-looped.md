# `StopLooped`

Stop a looping effect clip instance with low latency.

## Arguments

| Argument | Description                     |
| -------- | ------------------------------- |
| loopId   | Effect clip instance identifier |

## Return

`0`.

## Remarks

The clip stops looping at the lowest latency possible immediately, with no guarantee for consistent latency for multiple `PlayLooped` function calls.
