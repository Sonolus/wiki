# Engine Data Node

Engine data Node is used to execute logic.

## Syntax

```ts
type EngineDataNode = EngineDataValueNode | EngineDataFunctionNode

type EngineDataValueNode = {
    value: number
}

type EngineDataFunctionNode = {
    func: RuntimeFunction
    args: number[]
}
```

### `EngineDataFunctionNode.args`

Indexes of argument nodes in `nodes` array.

## Example

```json
{
    "func": "Add",
    "args": [1, 2]
}
```

This is an `Add` function node that adds two argument nodes, which are index `1` and `2` in `nodes` array.
