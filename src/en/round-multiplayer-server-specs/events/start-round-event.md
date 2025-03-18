# `StartRoundEvent`

## Message

```ts
type StartRoundEvent = {
    type: 'startRound'
    state: string
    seed: number
}
```

### `state`

Server defined state information.

### `seed`

Random value between `0` and `1`.

It will be used as PRNG seed by clients to randomize runtime, thus server needs to ensure the same seed is sent to all clients.

## Remarks

Upon receiving, client will:

-   Raise a fatal error if round has already started.
-   Start playing the round with `state` and `seed`.

Client will use the value of `state` in `StartGameplayCommand` and `FinishGameplayCommand` which can be used by server to identify the round to ensure the round has not already ended.
