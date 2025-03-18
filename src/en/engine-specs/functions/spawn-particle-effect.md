# `SpawnParticleEffect`

Spawn a particle effect.

## Arguments

| Argument | Description                |
| -------- | -------------------------- |
| id       | Particle effect identifier |
| x1       | X1                         |
| y1       | Y1                         |
| x2       | X2                         |
| y2       | Y2                         |
| x3       | X3                         |
| y3       | Y3                         |
| x4       | X4                         |
| y4       | Y4                         |
| duration | Duration                   |
| isLooped | Whether is looped or not   |

## Return

A unique identifier of the spawned particle effect instance.

## Remarks

Points are in the order of bottom-left, top-left, top-right, bottom-right.

Returned identifier can be used to control the particle effect instance using `MoveParticleEffect` and `DestroyParticleEffect` functions.
