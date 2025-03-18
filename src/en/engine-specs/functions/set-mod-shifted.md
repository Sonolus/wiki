# `SetModShifted`

Set a value in block.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| x        | X                |
| y        | Y                |
| s        | S                |
| value    | Value            |

## Return

Value.

## Remarks

Equivalent to: `Set(id, x + y * s, Mod(Get(id, x + y * s), value))`.
