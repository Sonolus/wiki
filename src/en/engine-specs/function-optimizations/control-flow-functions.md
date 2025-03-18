# Control Flow Functions

Control flow functions conditionally execute some arguments.

## Branching Functions

When condition is constant and the matching branch is known, branching functions collapse to the matching branch.

```ts
If(true, Argument1, Argument2)

// will be optimized into:
Argument1
```

## Looping Functions

When condition is constant and leads to termination of the loop, looping functions are collapsed.

```ts
While(false, Argument)

// will be optimized into:
0
```

## Conditional Functions

Conditional functions are simplified when some conditions are constants.

```ts
And(1, 2, DynamicArgument1, DynamicArgument2, 0, Argument3, Argument4)

// will be optimized into:
And(DynamicArgument1, DynamicArgument2, 0)
```
