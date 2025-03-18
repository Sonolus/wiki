# Runtime Skin Transform

Runtime Skin Transform block is a 4x4 transformation matrix that is applied to all skin sprites.

## Identifier

```ts
const RuntimeSkinTransformId = 1002
```

## Values

| Index | Initial Value                 | Description               |
| ----- | ----------------------------- | ------------------------- |
| 0-15  | Values of 4x4 identity matrix | 4x4 transformation matrix |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `render`     |  ✔   |  ❌   |
