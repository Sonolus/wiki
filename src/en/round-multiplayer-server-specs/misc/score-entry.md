# `ScoreEntry`

Score.

## Syntax

```ts
type ScoreEntry = {
    userId: ServiceUserId
    value: Text | (string & {})
}
```

## Remarks

Client will raise a fatal error if:

-   User of `userId` does not exist.
