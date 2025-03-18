# `DecrementPostPointed`

Decrement a value in block by `1`.

## Arguments

| Argument | Description      |
| -------- | ---------------- |
| id       | Block identifier |
| index    | Index            |
| offset   | Offset           |

## Return

Value after decrement.

## Remarks

Equivalent to: `DecrementPost(Get(id, index), Get(id, index + 1) + offset)`.
