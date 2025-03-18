# `IncrementPrePointed`

Increment a value in block by `1`.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| offset   | Offset           |

## Return

Value before increment.

## Remarks

Equivalent to: `IncrementPre(Get(id, index), Get(id, index + 1) + offset)`.
