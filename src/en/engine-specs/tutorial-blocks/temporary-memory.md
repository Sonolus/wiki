# Temporary Memory

Temporary Memory block is used to provide temporary operational memory during callbacks.

## Identifier

```ts
const TemporaryMemoryId = 10000
```

## Values

### `touch` Callback

| Index  | Initial Value | Description    |
| ------ | ------------- | -------------- |
| 0-4095 | ?             | Generic memory |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `navigate`   |  ✔   |   ✔   |
| `update`     |  ✔   |   ✔   |

## Remarks

Initial values of Temporary Memory block are unpredictable. It is important to take this into account when using Temporary Memory block and do not rely on its initial values.
