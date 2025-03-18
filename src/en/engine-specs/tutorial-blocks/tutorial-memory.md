# Tutorial Memory

Tutorial Memory block is used as generic memory storage.

## Identifier

```ts
const TutorialMemoryId = 2000
```

## Values

| Index  | Initial Value | Description    |
| ------ | ------------- | -------------- |
| 0-4095 | 0             | Generic memory |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `navigate`   |  ✔   |   ✔   |
| `update`     |  ✔   |   ✔   |
