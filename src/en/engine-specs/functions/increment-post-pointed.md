# `IncrementPostPointed`

Increment a value in block by `1`.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| offset   | Offset           |

## Return

Value after increment.

## Remarks

Equivalent to: `IncrementPost(Get(id, index), Get(id, index + 1) + offset)`.
