# Mathematical Functions

Mathematical functions are pure functions that take arguments and compute an output.

## Constant Folding

When all arguments are constants, mathematical functions will be precomputed.

```ts
Add(1, 2, 3)

// will be optimized into:
6
```

However, no constant folding can happen if not all arguments are constants.

```ts
Add(1, 2, DynamicArgument)

// cannot be optimized
```

## Variadic Argument Functions

For functions that accept variadic arguments such as `Add`, rewriting as binary form has no negative performance impact.

```ts
Add(1, 2, DynamicArgument)

// can be rewritten as:
Add(Add(1, 2), DynamicArgument)
```

This further allows constant folding to take place in sub expressions.

```ts
Add(Add(1, 2), DynamicArgument)

// will be optimized into:
Add(3, DynamicArgument)
```
