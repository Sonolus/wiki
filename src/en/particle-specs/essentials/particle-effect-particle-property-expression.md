# Particle Effect Particle Property Expression

Particle effect particle property expression provides simple yet powerful way for particle to describe its property.

## Property Expression

Each property output is computed based on its property expression, which is the sum of all property inputs multiplied by corresponding coefficient.

Take the following example:

```json
{
    "x": {
        "c": 0.1,
        "cosr1": 0.2
    }
}
```

It will be transformed with the following logic:

```ts
output.x = input.c * 0.1 + input.cosr1 * 0.2
```

## Inputs

| Name    | Description                          |
| ------- | ------------------------------------ |
| `c`     | Equals to `1`                        |
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
