# Runtime Particle Transform

Runtime Particle Transform block is a 4x4 transformation matrix that is applied to all particle effects.

## Identifier

```ts
const RuntimeParticleTransformId = 1003
```

## Values

| Index | Initial Value                 | Description               |
| ----- | ----------------------------- | ------------------------- |
| 0-15  | Values of 4x4 identity matrix | 4x4 transformation matrix |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `navigate`   |  ✔   |   ✔   |
| `update`     |  ✔   |   ✔   |
