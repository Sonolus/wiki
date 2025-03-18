# Preview: Blocks

Blocks are continuous memories of floating point numbers.

## Communication Mechanism

Blocks are the main communication mechanism between Sonolus and engine.

For example, Sonolus can pass screen aspect ratio information to engine by updating the 1st value of Runtime Environment block; engine can pass scroll information to Sonolus by updating the 0th value of Runtime Canvas block.

## Accessing Blocks

Blocks can be accessed using `Get` and `Set` functions.

## Read Access Table

| Block                      | `preprocess` | `render` |
| -------------------------- | :----------: | :------: |
| Runtime Environment        |      ✔       |    ✔     |
| Runtime Canvas             |      ✔       |    ✔     |
| Runtime Skin Transform     |      ✔       |    ✔     |
| Runtime Ui                 |      ✔       |    ✔     |
| Runtime Ui Configuration   |      ✔       |    ✔     |
| Preview Data               |      ✔       |    ✔     |
| Preview Option             |      ✔       |    ✔     |
| Engine Rom                 |      ✔       |    ✔     |
| Entity Data                |      ✔       |    ✔     |
| Entity Shared Memory       |      ✔       |    ✔     |
| Entity Info                |      ✔       |    ✔     |
| Entity Data Array          |      ✔       |    ✔     |
| Entity Shared Memory Array |      ✔       |    ✔     |
| Entity Info Array          |      ✔       |    ✔     |
| Temporary Memory           |      ✔       |    ✔     |

## Write Access Table

| Block                      | `preprocess` | `render` |
| -------------------------- | :----------: | :------: |
| Runtime Environment        |      ✔       |    ❌    |
| Runtime Canvas             |      ✔       |    ❌    |
| Runtime Skin Transform     |      ✔       |    ❌    |
| Runtime Ui                 |      ✔       |    ❌    |
| Runtime Ui Configuration   |      ✔       |    ❌    |
| Preview Data               |      ✔       |    ❌    |
| Preview Option             |      ❌      |    ❌    |
| Engine Rom                 |      ❌      |    ❌    |
| Entity Data                |      ✔       |    ❌    |
| Entity Shared Memory       |      ✔       |    ❌    |
| Entity Info                |      ❌      |    ❌    |
| Entity Data Array          |      ✔       |    ❌    |
| Entity Shared Memory Array |      ✔       |    ❌    |
| Entity Info Array          |      ❌      |    ❌    |
| Temporary Memory           |      ✔       |    ✔     |
