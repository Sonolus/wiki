# Performance

Essential topics related to performance.

## Non-Parallel Callbacks

With modern mobile CPU having more than one core, putting heavy duty code in parallel callbacks will allow them to be executed at the same time by multiple CPU cores, greatly improving performance.

For example, reduce code `updateSequential` in callbacks to only that needs to write to global blocks (such as Level Memory), and rest of the code (such as rendering) should be done in `updateParallel` callback for best performance.

## Node Count

Sonolus has a sizable overhead when executing a node, even for a value note. It is recommended to reduce node count to improve performance, by more efficient code or leveraging optimization system.

For example (ignoring optimization system), `Get(1, Add(2, Multiply(3, 4)))` executes 7 nodes, while `GetShifted(1, 2, 3, 4)` executes only 5 nodes and thus is preferred.

## Function Optimizations

See [Function Optimizations](../function-optimizations/overview).
