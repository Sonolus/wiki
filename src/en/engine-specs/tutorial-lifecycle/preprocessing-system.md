# Preprocessing System

Preprocessing system is responsible for setting up or modifying blocks to be used throughout the tutorial.

## `preprocess` Callback

`preprocess` callback is executed.

## Remarks

`preprocess` callback is the only callback where writing to normally immutable blocks is allowed. Therefore it is great for preparing data that are unknown at compile time, yet required at runtime.

Due to the nature of preprocessing system running only once before the start of a level, it is recommended to use `preprocess` callback to do all immediately needed calculations that are required at runtime instead of doing them at runtime, to improve performance.
