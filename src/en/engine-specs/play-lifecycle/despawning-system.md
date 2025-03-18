# Despawning System

Despawning system is responsible for despawning to be despawned entities.

## `terminate` Callback

System loops through all to be despawned entities in parallel. For each entity `terminate` callback is executed.

All to be despawned entities are then despawned.

## Remarks

`terminate` callback is typically used to execute cleanup logic specific to each entity. For example, despawning persistent particle effects.
