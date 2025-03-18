# `ServiceUserProfile`

`ServiceUserProfile` provides information of a user.

## Syntax

```ts
type ServiceUserProfile = {
    id: ServiceUserId
    handle: string
    name: string
    avatarForegroundColor: string
    avatarBackgroundColor: string
    aboutMe: string
    socialLinks: { title: string; address: string }[]
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
    "socialLinks": [
        {
            "title": "Link",
            "address": "https:// ..."
        }
        // ...
    ],
    "favorites": [
        "sonolus:// ..."
        // ...
    ]
}
```
