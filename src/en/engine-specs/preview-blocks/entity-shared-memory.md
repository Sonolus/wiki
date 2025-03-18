# Entity Shared Memory

Entity Shared Memory block is used as generic memory storage that are accessible by other entities.

## Identifier

```ts
const EntitySharedMemoryId = 4001
```

## Values

| Index | Initial Value | Description    |
| ----- | ------------- | -------------- |
| 0-31  | 0             | Generic memory |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `render`     |  ✔   |  ❌   |

## Remarks

Entity Shared Memory is simply a view into Entity Shared Memory Array.
