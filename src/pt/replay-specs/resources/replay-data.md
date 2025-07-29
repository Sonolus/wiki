# Dados de repetição

Os dados de replay são usados pelo aplicativo Sonolus para fornecer informações extras ao modo de observação.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type ReplayData = {
    startTime: number
    saveTime: number
    duration: number
    inputOffset: number
    playArea: {
        width: number
        height: number
    }
    result: GameplayResult
    inputs: {
        entityIndex: number[]
        time: number[]
        judgment: number[]
        accuracy: number[]
    }
    entities: {
        data: {
            name: string
            value: number
        }[]
    }[]
    touches: {
        l: number[]
        t: number[]
        x: number[]
        y: number[]
    }
    streams?: {
        id: number
        keys: number[]
        values: number[]
    }[]
}
```

### `inputs.entityIndex` , `inputs.time` , `touches.t` , `touches.x` , `touches.y` , `streams.keys` e `streams.values`

Os valores são codificados em delta.

## Exemplos

```json
{
    "startTime": 1640995200000,
    "saveTime": 1640995320000,
    "duration": 120,
    "inputOffset": 0.05,
    "playArea": {
        "width": 1024,
        "height": 768
    },
    "result": {
        // ...
    },
    "inputs": {
        "entityIndex": [
            // ...
        ],
        "time": [
            // ...
        ],
        "judgment": [
            // ...
        ],
        "accuracy": [
            // ...
        ]
    },
    "entities": [
        {
            "data": [
                // ...
            ]
        }
        // more entities
    ],
    "touches": {
        "l": [
            // ...
        ],
        "t": [
            // ...
        ],
        "x": [
            // ...
        ],
        "y": [
            // ...
        ]
    }
}
```
