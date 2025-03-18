# Spawn System

Spawn system is responsible for calculating the spawn and despawn time of each entity.

## `Spawn` Function Entities

Entities spawned by calling `Spawn` function are added to spawn queue.

## `spawnTime` Callback

System loops through all entities in spawn queue sequentially based on their `spawnTime` callback order. For each entity `spawnTime` callback is executed, and return value is used as its spawn time.

## `despawnTime` Callback

System loops through all entities in spawn queue sequentially based on their `despawnTime` callback order. For each entity `despawnTime` callback is executed, and return value is used as its despawn time.
