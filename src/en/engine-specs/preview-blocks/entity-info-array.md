# Entity Info Array

Entity Info Array block contains state information of entities.

## Identifier

```ts
const EntityInfoArrayId = 4102
```

## Values

| Index | Initial Value | Description                     |
| ----- | ------------- | ------------------------------- |
| 0-1   | ?             | State information of 0th entity |
| 2-3   | ?             | State information of 1st entity |
| 4-5   | ?             | State information of 2nd entity |
| ...   | ...           | ...                             |

See Entity Info block.

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |  ❌   |
| `render`     |  ✔   |  ❌   |
