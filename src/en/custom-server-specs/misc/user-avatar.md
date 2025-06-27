# User Avatar

Implement displaying user avatar in your frontend that offers "sign in with Sonolus" feature.

## Obtain Avatar

User avatar can be obtained from [`ServiceUserProfile`](./service-user-profile) during server, multiplayer, or external authentication. User avatar display can be implemented based on the following properties:

```ts
type ServiceUserProfile = {
    // ...
    avatarType: string
    avatarForegroundType: string
    avatarForegroundColor: string
    avatarBackgroundType: string
    avatarBackgroundColor: string
    // ...
}
```

The following sections describes different types of avatar to implement, as well as an example implementation in HTML and CSS.

## Themed Avatar

When `avatarType` starts with `theme-`, user has a themed avatar.

It should be implemented as:

-   A layer with image `https://content.sonolus.com/avatar/{avatarType}`.

::: code-group

```HTML
<div class="themed-avatar"></div>
```

```CSS
.themed-avatar {
    background-image: url(https://content.sonolus.com/avatar/theme-000001);
    background-size: 100% 100%;
}
```

:::

<div class="themed-avatar" />

## Default Avatar with Themed Background

When `avatarType` is `default` and `avatarBackgroundType` starts with `theme-`, user has a default avatar with themed background.

It should be implemented as:

-   A background layer with image `https://content.sonolus.com/avatar/background/{avatarBackgroundType}`.
-   A foreground layer with image `https://content.sonolus.com/avatar/foreground/{avatarForegroundType}`, color multiplied with `avatarForegroundColor`, scaled to 50% in size and centered.

::: code-group

```HTML
<div class="themed-avatar-background">
    <div class="avatar-foreground"></div>
</div>
```

```CSS
.themed-avatar-background {
    background-image: url(https://content.sonolus.com/avatar/background/theme-000001);
    background-size: 100% 100%;
}

.avatar-foreground {
    width: 100%;
    height: 100%;
    background-color: #ffff00;
    mask-image: url(https://content.sonolus.com/avatar/foreground/player);
    mask-size: 50% 50%;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
}
```

:::

<div class="themed-avatar-background">
    <div class="avatar-foreground" />
</div>

## Default Avatar with Default Background

When `avatarType` is `default` and `avatarBackgroundType` is `default`, user has a default avatar with default background.

It should be implemented as:

-   A background layer with image `https://content.sonolus.com/avatar/background/default`, and color multiplied with `avatarBackgroundColor`
-   A foreground layer with image `https://content.sonolus.com/avatar/foreground/{avatarForegroundType}`, color multiplied with `avatarForegroundColor`, and scaled to 50% in size and centered.

::: code-group

```HTML
<div class="avatar-background">
    <div class="avatar-foreground"></div>
</div>
```

```CSS
.avatar-background {
    background-color: #00ffff;
    mask-image: url(https://content.sonolus.com/avatar/background/default);
    mask-size: 100% 100%;
}

.avatar-foreground {
    width: 100%;
    height: 100%;
    background-color: #ffff00;
    mask-image: url(https://content.sonolus.com/avatar/foreground/player);
    mask-size: 50% 50%;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
}
```

:::

<div class="avatar-background">
    <div class="avatar-foreground" />
</div>

<style scoped>
.themed-avatar {
    width: 128px;
    height: 128px;
    background-image: url(https://content.sonolus.com/avatar/theme-000001);
    background-size: 100% 100%;
}

.themed-avatar-background {
    width: 128px;
    height: 128px;
    background-image: url(https://content.sonolus.com/avatar/background/theme-000001);
    background-size: 100% 100%;
}

.avatar-background {
    width: 128px;
    height: 128px;
    background-color: #00ffff;
    mask-image: url(https://content.sonolus.com/avatar/background/default);
    mask-size: 100% 100%;
}

.avatar-foreground {
    width: 100%;
    height: 100%;
    background-color: #ffff00;
    mask-image: url(https://content.sonolus.com/avatar/foreground/player);
    mask-size: 50% 50%;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
}
</style>
