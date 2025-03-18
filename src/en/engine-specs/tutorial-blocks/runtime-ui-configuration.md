# Runtime UI Configuration

Runtime UI Configuration block contains configuration of gameplay UI elements.

## Identifier

```ts
const RuntimeUIConfigurationId = 1006
```

## Values

| Index | Initial Value | Description                     |
| ----- | ------------- | ------------------------------- |
| 0-1   | 0             | Configuration of menu UI        |
| 2-3   | 0             | Configuration of navigation UI  |
| 4-5   | 0             | Configuration of instruction UI |

For each UI:

| Index         | Initial Value | Description |
| ------------- | ------------- | ----------- |
| UI offset + 0 | 0             | Scale       |
| UI offset + 1 | 0             | Alpha       |

## Access

| Callback     | Read | Write |
| ------------ | :--: | :---: |
| `preprocess` |  ✔   |   ✔   |
| `navigate`   |  ✔   |  ❌   |
| `update`     |  ✔   |  ❌   |
