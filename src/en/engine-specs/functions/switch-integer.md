# `SwitchInteger`

Conditionally execute a branch.

## Arguments

| Argument     | Description         |
| ------------ | ------------------- |
| discriminant | Discriminant        |
| consequent_0 | Branch 0 consequent |
| consequent_1 | Branch 1 consequent |
| consequent_2 | Branch 2 consequent |
| ...          | ...                 |

## Return

`consequent_n` of branch where `discriminant` equals to `n`, or `0` if no branch matches.
