# `Sonolus-Session`

`Sonolus-Session` specifies the current session.

## Syntax

```http
Sonolus-Session: <value>
```

## Examples

```http
Sonolus-Session: ...
```

## Remarks

Session is the same as returned by [`POST /sonolus/authenticate`](../endpoints/post-sonolus-authenticate).

Using session, server can serve personalized content.
