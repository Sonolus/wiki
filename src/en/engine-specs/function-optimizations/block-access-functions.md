# Block Access Functions

Block access functions read or write to blocks.

## Immutable Read

When reading from immutable block, functions will be replaced with corresponding values.

```ts
Get(EngineRom, 0)

// will be optimized into a value node with corresponding value
```

## Immutable Write

When writing to immutable block, functions will be replaced with `Execute`.

```ts
Set(EngineRom, 0, Argument)

// will be optimized into:
Execute(Argument)
```
