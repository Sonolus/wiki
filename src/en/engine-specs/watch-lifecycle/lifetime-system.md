# Lifetime System

Lifetime system is responsible for despawning entities that are outside of range and spawning entities that are in range.

## `updateSpawn` Callback

`updateSpawn` callback is executed globally, and return value is used as spawning time.

## Despawning

System loops through all active entities and marks entities with spawn range outside of spawning time to be despawned.

## `terminate` Callback

System loops through all to be despawned entities in parallel. For each entity `terminate` callback is executed.

All to be despawned entities are then despawned.

## Spawning

System loops through all entities in spawn queue and spawn entities with spawn range inside of spawning time.

## `initialize` Callback

System loops through all newly spawned entities in parallel. For each entity `initialize` callback is executed.

## Remarks

Due to the nature of watch mode being player controllable and can be freely time skipped, an entity may spawn and despawn multiple times. It is important to take this into account when writing entity logic.

`terminate` callback is typically used to execute cleanup logic specific to each entity. For example, despawning persistent particle effects.

`initialize` callback is typically used to execute initialization logic specific to each entity. For example, calculating and storing values to Entity Memory, or spawning persistent particle effects.

Due to the parallel nature of initialization system, it is suitable for heavy initialization workload. It is recommended to put heavy initialization workload in `initialize`, while leaving preprocessing system light and only immediately necessary workload.
