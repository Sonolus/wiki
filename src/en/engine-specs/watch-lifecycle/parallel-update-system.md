# Parallel Update System

Parallel update system is responsible for updating active entities in parallel.

## `updateParallel` Callback

System loops through all active entities in parallel. For each entity `updateParallel` callback is executed.

## Remarks

Due to the parallel nature of sequential update system, it is recommended to put majority of the workload of each entity into `updateParallel` callback. For example, calculate entity position and draw skin sprites.
