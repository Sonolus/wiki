# Watch: Lifecycle

An overview of a Sonolus level's lifecycle during watch.

## Preparation

Preparation runs once and only once before the start of a level, and prepares the runtime for watch.

Preparation consists of early optimization system, preprocessing system, late optimization system, and spawn system.

### Early Optimization System

Early optimization system is responsible for optimizing nodes to improve code performance.

### Preprocessing System

Preprocessing system is responsible for setting up or modifying blocks to be used throughout watch.

### Late Optimization System

Late optimization system is responsible for optimizing nodes to further improve code performance.

### Spawn System

Spawn system is responsible for calculating the spawn and despawn time of each entity.

## Update Cycle

Update cycle runs continuously every frame during watch.

Update cycle consists of lifetime system, sequential update system, parallel update system, and presentation system.

### Lifetime System

Lifetime system is responsible for despawning entities that are outside of range and spawning entities that are in range.

### Sequential Update System

Sequential update system is responsible for updating active entities sequentially.

### Parallel Update System

Parallel update system is responsible for updating active entities in parallel.

### Presentation System

Presentation system is responsible for presenting skin sprites, effect clips, and particle effects.
