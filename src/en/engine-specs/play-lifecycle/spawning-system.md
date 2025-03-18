# Spawning System

Spawning system is responsible for spawning entities that are ready.

## Spawn Queue

If spawn queue is not empty, `shouldSpawn` callback of first entity in spawn queue will be called. If it returns a truthy value, the entity will be spawned and removed from spawn queue, and repeat the process; otherwise, spawning process will be stopped.

## `Spawn` Function Queue

All entities in `Spawn` function queue will be spawned in order.

## Remarks

Due to the sequential nature of spawning system, an entity cannot spawn until all previous entities in the spawn queue have been spawned. This ensures spawning system's performance regardless of the number of entities. Thus, it is crucial for each entity to return the correct spawn order in spawn ordering system.

Due to the sequential nature of spawning system, it is recommended to reduce workload in `shouldSpawn` callback to increase performance. For example, move as much logic to `preprocess` callback as possible, and perform only simple comparison checks in `shouldSpawn` callback.
