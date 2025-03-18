# Tutorial Data

Tutorial Data block is used as generic data storage.

## Identifier

```ts
const TutorialDataId = 2001
```

## Values

| Index  | Initial Value | Description  |
| ------ | ------------- | ------------ |
| 0-4095 | 0             | Generic data |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `navigate`   |  ✔   |  ❌   |
| `update`     |  ✔   |  ❌   |
