# Runtime Update

Runtime Update block contains runtime information of current frame and updates every frame.

## Identifier

```ts
const RuntimeUpdateId = 1001
```

## Values

| Index | Initial Value | Description                                       |
| ----- | ------------- | ------------------------------------------------- |
| 0     | ?             | Time                                              |
| 1     | ?             | Delta time                                        |
| 2     | ?             | Navigation direction: `-1` = Previous, `1` = Next |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |  ❌   |
| `navigate`   |  ✔   |  ❌   |
| `update`     |  ✔   |  ❌   |
