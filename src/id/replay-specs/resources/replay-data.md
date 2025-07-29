# Replay Data

Replay Data digunakan oleh aplikasi Sonolus untuk memberikan informasi tambahan pada mode tonton.

## Jenis Sumber Daya

Sumber daya JSON.

`.json` adalah satu-satunya format yang didukung, dan juga harus dikompresi GZip.

## Sintaks

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

### `inputs.entityIndex`, `inputs.time`, `touches.t`, `touches.x`, `touches.y`, `streams.keys`, dan `streams.values`

Nilai dikodekan delta.

## Contoh

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
        // lebih banyak entitas
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
