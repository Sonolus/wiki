# `UserItem`

`UserItem` provides information of a user.

## Syntax

```ts
type UserItem = {
    name: string
    source?: string
    title: string
    handle?: string
    tags: Tag[]
}
```

### `name`

Unique name which identifies the user.

### `source`

Address of the source server.

Providing a source allows Sonolus to update the item in collection and use the item in multiplayer.

### `handle`

Sonolus handle.

## Examples

```json
{
    "name": "burrito",
    "title": "Burrito#1000",
    "handle": "1000",
    "tags": [
        // ...
    ]
}
```
