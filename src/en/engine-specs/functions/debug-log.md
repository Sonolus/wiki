# `DebugLog`

Log a value.

## Arguments

| Argument | Description |
| -------- | ----------- |
| value    | Value       |

## Return

`0`.

## Remarks

Only available in debug mode, value is logged to bottom right of screen as well as pause menu.

It is not safe from race condition in parallel callbacks.
