# Spawn Ordering System

Spawn ordering system is responsible for calculating the spawn order of each entity and order them into spawn queue.

## `spawnOrder` Callback

System loops through all entities in level sequentially based on their `spawnOrder` callback order. For each entity `spawnOrder` callback is executed, and return value is used as its spawn order.

All entities are put into spawn queue based on their spawn order. In case of multiple entities with same spawn order, their original order is preserved.
