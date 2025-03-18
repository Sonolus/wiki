# Play: Lifecycle

An overview of a Sonolus level's lifecycle during gameplay.

## Preparation

Preparation runs once and only once before the start of a level, and prepares the runtime for gameplay. Subsequent restarts of the level will not run preparation again.

Preparation consists of early optimization system, preprocessing system, late optimization system, and spawn ordering system.

### Early Optimization System

Early optimization system is responsible for optimizing nodes to improve code performance.

### Preprocessing System

Preprocessing system is responsible for setting up or modifying blocks to be used throughout the gameplay.

### Late Optimization System

Late optimization system is responsible for optimizing nodes to further improve code performance.

### Spawn Ordering System

Spawn ordering system is responsible for calculating the spawn order of each entity and order them into spawn queue.

## Update Cycle

Update cycle runs continuously every frame during the gameplay.

Update cycle consists of spawning system, initialization system, sequential update system, input system, parallel update system, despawning system, and presentation system.

### Spawning System

Spawning system is responsible for spawning entities that are ready.

### Initialization System

Initialization system is responsible for initializing newly spawned entities.

### Sequential Update System

Sequential update system is responsible for updating active entities sequentially.

### Input System

Input system is responsible for processing user inputs for active entities.

### Parallel Update System

Parallel update system is responsible for updating active entities in parallel.

### Despawning System

Despawning system is responsible for despawning to be despawned entities.

### Presentation System

Presentation system is responsible for presenting skin sprites, effect clips, and particle effects.
