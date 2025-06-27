# `ServiceUserProfile`

`ServiceUserProfile` provides information of a user.

## Syntax

```ts
type ServiceUserProfile = {
    id: ServiceUserId
    handle: string
    name: string
    avatarType: string
    avatarForegroundType: string
    avatarForegroundColor: string
    avatarBackgroundType: string
    avatarBackgroundColor: string
    bannerType: string
    aboutMe: string
    favorites: string[]
}
```

## Examples

```json
{
    "id": "...",
    "handle": "1000",
    "name": "Username",
    "avatarForegroundColor": "#ffffffff",
    "avatarBackgroundColor": "#000020ff",
    "aboutMe": "Nice to meet you!",
    "favorites": [
        "sonolus:// ..."
        // ...
    ]
}
```
