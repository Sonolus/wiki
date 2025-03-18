# Entity Info

Entity Info block contains state information of the entity.

## Identifier

```ts
const EntityInfoId = 4002
```

## Values

| Index | Initial Value | Description             |
| ----- | ------------- | ----------------------- |
| 0     | ?             | Index of the entity     |
| 1     | ?             | Archetype of the entity |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |  ❌   |
| `render`     |  ✔   |  ❌   |

## Remarks

Entity Info is simply a view into Entity Info Array.
