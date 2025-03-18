# Sequential Update System

Sequential update system is responsible for updating active entities sequentially.

## `updateSequential` Callback

System loops through all active entities sequentially based on their `updateSequential` callback order. For each entity `updateSequential` callback is executed.

## Remarks

Due to the sequential nature of sequential update system, it is recommended to reduce workload in `updateSequential` callback to increase performance. For example, move as much logic to `updateParallel` as possible, and only use `updateSequential` callback if there are needs to write to shared blocks.
