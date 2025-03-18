# `SetSubtractPointed`

Set a value in block.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| offset   | Offset           |
| value    | Value            |

## Return

Value.

## Remarks

Equivalent to: `Set(Get(id, index), Get(id, index) + offset, Subtract(Get(Get(id, index), Get(id, index) + offset), value))`.
