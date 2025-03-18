# `SetMod`

Set a value in block.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| value    | Value            |

## Return

Value.

## Remarks

Equivalent to: `Set(id, index, Mod(Get(id, index), value))`.
