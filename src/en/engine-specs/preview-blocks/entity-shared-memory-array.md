# Entity Shared Memory Array

Entity Shared Memory Array block contains shared memory of entities.

## Identifier

```ts
const EntitySharedMemoryArrayId = 4101
```

## Values

| Index | Initial Value | Description                 |
| ----- | ------------- | --------------------------- |
| 0-31  | ?             | Shared memory of 0th entity |
| 32-63 | ?             | Shared memory of 1st entity |
| 64-95 | ?             | Shared memory of 2nd entity |
| ...   | ...           | ...                         |

See Entity Shared Memory block.

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `render`     |  ✔   |  ❌   |
