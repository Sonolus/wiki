# Watch: Blocks

Blocks are continuous memories of floating point numbers.

## Communication Mechanism

Blocks are the main communication mechanism between Sonolus and engine.

For example, Sonolus can pass current time information to engine by updating the 0th value of Runtime Update block; engine can pass judgment information to Sonolus by updating the 0th value of Entity Input block.

## Accessing Blocks

Blocks can be accessed using `Get` and `Set` functions.

## Read Access Table

| Block                      | `preprocess` | `spawnTime` | `despawnTime` | `initialize` | `updateSequential` | `updateParallel` | `terminate` | `updateSpawn` |
| -------------------------- | :----------: | :---------: | :-----------: | :----------: | :----------------: | :--------------: | :---------: | :-----------: |
| Runtime Environment        |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime Update             |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime Skin Transform     |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime Particle Transform |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime Background         |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime UI                 |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Runtime UI Configuration   |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Memory               |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Data                 |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Option               |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Bucket               |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Score                |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Level Life                 |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Engine Rom                 |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Entity Memory              |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Data                |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Shared Memory       |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Info                |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Input               |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Data Array          |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Entity Shared Memory Array |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Entity Info Array          |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Archetype Life             |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
| Temporary Memory           |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |

## Write Access Table

| Block                      | `preprocess` | `spawnTime` | `despawnTime` | `initialize` | `updateSequential` | `updateParallel` | `terminate` | `updateSpawn` |
| -------------------------- | :----------: | :---------: | :-----------: | :----------: | :----------------: | :--------------: | :---------: | :-----------: |
| Runtime Environment        |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Runtime Update             |      ❌      |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Runtime Skin Transform     |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Runtime Particle Transform |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Runtime Background         |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Runtime UI                 |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Runtime UI Configuration   |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Level Memory               |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Level Data                 |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Level Option               |      ❌      |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Level Bucket               |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Level Score                |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Level Life                 |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Engine Rom                 |      ❌      |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Entity Memory              |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Data                |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Entity Shared Memory       |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Entity Info                |      ❌      |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Entity Input               |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |      ❌       |
| Entity Data Array          |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Entity Shared Memory Array |      ✔       |     ❌      |      ❌       |      ❌      |         ✔          |        ❌        |     ❌      |      ❌       |
| Entity Info Array          |      ❌      |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Archetype Life             |      ✔       |     ❌      |      ❌       |      ❌      |         ❌         |        ❌        |     ❌      |      ❌       |
| Temporary Memory           |      ✔       |      ✔      |       ✔       |      ✔       |         ✔          |        ✔         |      ✔      |       ✔       |
