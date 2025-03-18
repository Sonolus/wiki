# Runtime Canvas

Runtime Canvas block is used to pass instruction information back to Sonolus.

## Identifier

```ts
const RuntimeCanvasId = 1001
```

## Values

| Index | Initial Value | Description                                                                                |
| ----- | ------------- | ------------------------------------------------------------------------------------------ |
| 0     | 0             | Scroll: `0` = Left to right, `1` = Top to bottom, `2` = Right to left, `3` = Bottom to top |
| 1     | 0             | Size                                                                                       |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `render`     |  ✔   |  ❌   |

## Remarks

Scroll controls the scrolling direction and starting position, while size controls the size in the scrolling direction.
