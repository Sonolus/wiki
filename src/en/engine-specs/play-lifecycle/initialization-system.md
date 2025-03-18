# Initialization System

Initialization system is responsible for initializing newly spawned entities.

## `initialize` Callback

System loops through all newly spawned entities in parallel. For each entity `initialize` callback is executed.

## Remarks

`initialize` callback is typically used to execute initialization logic specific to each entity. For example, calculating and storing values to Entity Memory, or spawning persistent particle effects.

Due to the parallel nature of initialization system, it is suitable for heavy initialization workload. It is recommended to put heavy initialization workload in `initialize`, while leaving preprocessing system light and only immediately necessary workload.
