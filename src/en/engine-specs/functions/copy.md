# `Copy`

Copy a range of block values.

## Arguments

| Argument | Description                  |
| -------- | ---------------------------- |
| srcId    | Source block identifier      |
| srcIndex | Source index                 |
| dstId    | Destination block identifier |
| dstIndex | Destination index            |
| count    | Count                        |

## Return

`0`.

## Remarks

`Copy` ensures all values are correctly copied, even if source and destination ranges overlap.
