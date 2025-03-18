# `JudgeSimple`

Judge player timing.

## Arguments

| Argument   | Description              |
| ---------- | ------------------------ |
| source     | Player timing            |
| target     | Target timing            |
| maxPerfect | Maximum Perfect distance |
| maxGreat   | Maximum Great distance   |
| maxGood    | Maximum Good distance    |

## Return

`1` if Perfect, `2` if Great, `3` if Good, and `0` otherwise.

## Remarks

It is the same as `Judge(source, target, -maxPerfect, maxPerfect, -maxGreat, maxGreat, -maxGood, maxGood)`.
