# `GetPointed`

Get a value in block.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| offset   | Offset           |

## Return

Value.

## Remarks

Equivalent to: `Get(Get(id, index), Get(id, index + 1) + offset)`.
