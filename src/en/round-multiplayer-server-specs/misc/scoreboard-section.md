# `ScoreboardSection`

Scoreboard section.

## Syntax

```ts
type ScoreboardSection = {
    title: Text | (string & {})
    icon?: Icon
    scores: ScoreEntry[]
}
```

## Remarks

Client will raise a fatal error if:

-   Users in `scores` contains duplications.
