# Tutorial: Blocks

Blocks are continuous memories of floating point numbers.

## Communication Mechanism

Blocks are the main communication mechanism between Sonolus and engine.

For example, Sonolus can pass current time information to engine by updating the 0th value of Runtime Update block; engine can pass instruction text information to Sonolus by updating the 0th value of Tutorial Instruction block.

## Accessing Blocks

Blocks can be accessed using `Get` and `Set` functions.

## Read Access Table

| Block                      | `preprocess` | `navigate` | `update` |
| -------------------------- | :----------: | :--------: | :------: |
| Runtime Environment        |      ✔       |     ✔      |    ✔     |
| Runtime Update             |      ✔       |     ✔      |    ✔     |
| Runtime Skin Transform     |      ✔       |     ✔      |    ✔     |
| Runtime Particle Transform |      ✔       |     ✔      |    ✔     |
| Runtime Background         |      ✔       |     ✔      |    ✔     |
| Runtime UI                 |      ✔       |     ✔      |    ✔     |
| Runtime UI Configuration   |      ✔       |     ✔      |    ✔     |
| Tutorial Memory            |      ✔       |     ✔      |    ✔     |
| Tutorial Data              |      ✔       |     ✔      |    ✔     |
| Tutorial Instruction       |      ✔       |     ✔      |    ✔     |
| Engine Rom                 |      ✔       |     ✔      |    ✔     |
| Temporary Memory           |      ✔       |     ✔      |    ✔     |

## Write Access Table

| Block                      | `preprocess` | `navigate` | `update` |
| -------------------------- | :----------: | :--------: | :------: |
| Runtime Environment        |      ✔       |     ❌     |    ❌    |
| Runtime Update             |      ❌      |     ❌     |    ❌    |
| Runtime Skin Transform     |      ✔       |     ✔      |    ✔     |
| Runtime Particle Transform |      ✔       |     ✔      |    ✔     |
| Runtime Background         |      ✔       |     ✔      |    ✔     |
| Runtime UI                 |      ✔       |     ❌     |    ❌    |
| Runtime UI Configuration   |      ✔       |     ❌     |    ❌    |
| Tutorial Memory            |      ✔       |     ✔      |    ✔     |
| Tutorial Data              |      ✔       |     ❌     |    ❌    |
| Tutorial Instruction       |      ✔       |     ✔      |    ✔     |
| Engine Rom                 |      ❌      |     ❌     |    ❌    |
| Temporary Memory           |      ✔       |     ✔      |    ✔     |
