# Effect Clip Name

While you can use any arbitrary string for effect clip name, there are standardized effect clip names that every effect is required to implement.

This requirement allows effects to be usable across different engines, and engines to be playable with other effects.

## Standardized Names

| Name                   | Looping |
| ---------------------- | ------- |
| `#MISS`                | ❌      |
| `#PERFECT`             | ❌      |
| `#GREAT`               | ❌      |
| `#GOOD`                | ❌      |
| `#HOLD`                | ✔       |
| `#MISS_ALTERNATIVE`    | ❌      |
| `#PERFECT_ALTERNATIVE` | ❌      |
| `#GREAT_ALTERNATIVE`   | ❌      |
| `#GOOD_ALTERNATIVE`    | ❌      |
| `#HOLD_ALTERNATIVE`    | ✔       |
| `#STAGE`               | ❌      |

## Looping

For looping effect clips, they are expected to remain presentable when looped.
