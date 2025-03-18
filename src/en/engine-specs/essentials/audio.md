# Audio

Essential topics related to audio.

## Minimum Time Distance

When two identical sound clip is played very close to each other in time (such as two entities that are meant to be hit at the same time), their sound waves constructively interfere and produce a noisy and loud result.

It is recommended to have a reasonable minimum time distance for each clip when using `Play` and `PlayScheduled` functions.

## `Play` vs `PlayScheduled`

`Play` function is used to play an effect clip as soon as possible disregarding precision, while `PlayScheduled` function is used to play an effect clip precisely at a scheduled time in the future.

It is recommended to use `Play` function for any unpredictable effect clip playing, such as reacting to player actions; while `PlayScheduled` function is used for predictable effect clip playing, such as in autoplay mode.
