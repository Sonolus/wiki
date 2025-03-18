# `SwitchWithDefault`

Conditionally execute a branch.

## Arguments

| Argument       | Description         |
| -------------- | ------------------- |
| discriminant   | Discriminant        |
| test_0         | Branch 0 test       |
| consequent_0   | Branch 0 consequent |
| test_1         | Branch 1 test       |
| consequent_1   | Branch 1 consequent |
| test_2         | Branch 2 test       |
| consequent_2   | Branch 2 consequent |
| ...            | ...                 |
| consequent_def | Default consequent  |

## Return

`consequent_n` of branch where `discriminant` equals to `test_n`, or `consequent_def` if no branch matches.
