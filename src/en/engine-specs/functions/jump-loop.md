# `JumpLoop`

Executes 0th branch, then executes branch pointed by the execution result, repeats until the last branch is executed then returns the result.

## Arguments

| Argument    | Description |
| ----------- | ----------- |
| branch_0    | 0th branch  |
| branch_1    | 1st branch  |
| branch_2    | 2nd branch  |
| ...         | ...         |
| branch_last | Last branch |

## Return

Result of the `branch_last`, or `0` if branch is not found.
