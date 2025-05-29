# `StreamGetValue`

Get value in stream.

## Arguments

| Argument | Description |
| -------- | ----------- |
| id       | Id          |
| key      | Key         |

## Return

First value if `key` is before first key in stream; last value if `key` is after last key in streams; interpolated value if `key` is between two keys in stream; `0` otherwise.
