# `GameplayResult`

`GameplayResult` menyediakan informasi hasil permainan.

# Sintaks

```ts
type GameplayResult = {
    grade: 'allPerfect' | 'fullCombo' | 'pass' | 'fail'
    arcadeScore: number
    accuracyScore: number
    combo: number
    perfect: number
    great: number
    good: number
    miss: number
    totalCount: number
}
```

# Contoh

```json
{
    "grade": "allPerfect",
    "arcadeScore": 1000000,
    "accuracyScore": 987654,
    "combo": 765,
    "perfect": 765,
    "great": 0,
    "good": 0,
    "miss": 0,
    "totalCount": 765
}
```
