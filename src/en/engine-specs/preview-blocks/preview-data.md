# Preview Data

Preview Data block is used as generic data storage.

## Identifier

```ts
const PreviewDataId = 2000
```

## Values

| Index  | Initial Value | Description  |
| ------ | ------------- | ------------ |
| 0-4095 | 0             | Generic data |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `render`     |  ✔   |  ❌   |
