# Particle Effect Transform

Particle effect transform provides simple yet powerful way for particle effect to manipulate its own transform while rendering.

## Transform Expression

Each property output is computed based on its transform expression, which is the sum of all property inputs multiplied by corresponding coefficient.

Take the following example:

```json
{
    "x1": {
        "x1": 0.1,
        "y2": 0.2,
        "x3": 0.3,
        "y4": 0.4
    }
}
```

It will be transformed with the following logic:

```ts
output.x1 = input.x1 * 0.1 + input.y2 * 0.2 + input.x3 * 0.3 + input.y4 * 0.4
```

## Inputs

| Name    | Description                          |
| ------- | ------------------------------------ |
| `c`     | Equals to `1`                        |
| `x1`    | `x1` received from engine            |
| `y1`    | `y1` received from engine            |
| `x2`    | `x2` received from engine            |
| `y2`    | `y2` received from engine            |
| `x3`    | `x3` received from engine            |
| `y3`    | `y3` received from engine            |
| `x4`    | `x4` received from engine            |
| `y4`    | `y4` received from engine            |
| `r1`    | Randomized value in range `0` to `1` |
| `r2`    | Randomized value in range `0` to `1` |
| `r3`    | Randomized value in range `0` to `1` |
| `r4`    | Randomized value in range `0` to `1` |
| `r5`    | Randomized value in range `0` to `1` |
| `r6`    | Randomized value in range `0` to `1` |
| `r7`    | Randomized value in range `0` to `1` |
| `r8`    | Randomized value in range `0` to `1` |
| `sinr1` | Equals to `sin(2 * PI * r1)`         |
| `sinr2` | Equals to `sin(2 * PI * r2)`         |
| `sinr3` | Equals to `sin(2 * PI * r3)`         |
| `sinr4` | Equals to `sin(2 * PI * r4)`         |
| `sinr5` | Equals to `sin(2 * PI * r5)`         |
| `sinr6` | Equals to `sin(2 * PI * r6)`         |
| `sinr7` | Equals to `sin(2 * PI * r7)`         |
| `sinr8` | Equals to `sin(2 * PI * r8)`         |
| `cosr1` | Equals to `cos(2 * PI * r1)`         |
| `cosr2` | Equals to `cos(2 * PI * r2)`         |
| `cosr3` | Equals to `cos(2 * PI * r3)`         |
| `cosr4` | Equals to `cos(2 * PI * r4)`         |
| `cosr5` | Equals to `cos(2 * PI * r5)`         |
| `cosr6` | Equals to `cos(2 * PI * r6)`         |
| `cosr7` | Equals to `cos(2 * PI * r7)`         |
| `cosr8` | Equals to `cos(2 * PI * r8)`         |

## Identity Transform

The identity transform produces an output equals to the input, and can be used when transforming is not needed:

```json
{
    "x1": { "x1": 1 },
    "y1": { "y1": 1 },
    "x2": { "x2": 1 },
    "y2": { "y2": 1 },
    "x3": { "x3": 1 },
    "y3": { "y3": 1 },
    "x4": { "x4": 1 },
    "y4": { "y4": 1 }
}
```
