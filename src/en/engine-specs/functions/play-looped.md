# `PlayLooped`

Play a looping effect clip with low latency.

## Arguments

| Argument | Description     |
| -------- | --------------- |
| id       | Clip identifier |

## Return

A unique identifier of the looping effect clip instance.

## Remarks

The clip starts looping at the lowest latency possible immediately, with no guarantee for consistent latency for multiple `PlayLooped` function calls.

Returned identifier can be used to control the effect clip instance using `StopLooped` function.
