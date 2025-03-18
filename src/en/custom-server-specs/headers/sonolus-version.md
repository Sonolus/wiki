# `Sonolus-Version`

`Sonolus-Version` specifies the version of Sonolus app the server supports.

## Syntax

```http
Sonolus-Version: <value>
```

## Examples

```http
Sonolus-Version: 0.8.0
```

## Remarks

When a player with an unsupported version of Sonolus app attempts to join the server, a prompt is presented to inform the player and entry is aborted.

While this header is optional, it is strongly recommended to ensure players using the server can have the best intended experience.
