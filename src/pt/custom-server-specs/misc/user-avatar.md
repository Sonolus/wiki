# Avatar do usuário

Implemente a exibição do avatar do usuário no seu frontend que oferece o recurso "entrar com o Sonolus".

## Obter Avatar

O avatar do usuário pode ser obtido do [`ServiceUserProfile`](./service-user-profile) durante a autenticação no servidor, multijogador ou externa. A exibição do avatar do usuário pode ser implementada com base nas seguintes propriedades:

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

As seções a seguir descrevem diferentes tipos de avatar a serem implementados, bem como um exemplo de implementação em HTML e CSS.

## Avatar temático

Quando `avatarType` começa com `theme-` , o usuário tem um avatar temático.

Deve ser implementado como:

- Uma camada com imagem `https://content.sonolus.com/avatar/{avatarType}` .

::: grupo de códigos

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

<div class="themed-avatar"></div>

## Avatar padrão com fundo temático

Quando `avatarType` é `default` e `avatarBackgroundType` começa com `theme-` , o usuário tem um avatar padrão com fundo temático.

Deve ser implementado como:

- Uma camada de fundo com imagem `https://content.sonolus.com/avatar/background/{avatarBackgroundType}` .
- Uma camada de primeiro plano com a imagem `https://content.sonolus.com/avatar/foreground/{avatarForegroundType}` , cor multiplicada com `avatarForegroundColor` , dimensionada para 50% em tamanho e centralizada.

::: grupo de códigos

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
    <div class="avatar-foreground"></div>
</div>

## Avatar padrão com plano de fundo padrão

Quando `avatarType` é `default` e `avatarBackgroundType` é `default` , o usuário tem um avatar padrão com fundo padrão.

Deve ser implementado como:

- Uma camada de fundo com imagem `https://content.sonolus.com/avatar/background/default` e cor multiplicada com `avatarBackgroundColor`
- Uma camada de primeiro plano com a imagem `https://content.sonolus.com/avatar/foreground/{avatarForegroundType}` , cor multiplicada com `avatarForegroundColor` e dimensionada para 50% em tamanho e centralizada.

::: grupo de códigos

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
    <div class="avatar-foreground"></div>
</div>

&lt;estilo com escopo&gt; .themed-avatar { largura: 128px; altura: 128px; imagem de fundo: url(https://content.sonolus.com/avatar/theme-000001); tamanho do fundo: 100% 100%; } .themed-avatar-background { largura: 128px; altura: 128px; imagem de fundo: url(https://content.sonolus.com/avatar/background/theme-000001); tamanho do fundo: 100% 100%; } .avatar-background { largura: 128px; altura: 128px; cor de fundo: #00ffff; imagem da máscara: url(https://content.sonolus.com/avatar/background/default); tamanho da máscara: 100% 100%; } .avatar-foreground { largura: 100%; altura: 100%; cor de fundo: #ffff00; imagem da máscara: url(https://content.sonolus.com/avatar/foreground/player); tamanho da máscara: 50% 50%; posição da máscara: 50% 50%; repetição da máscara: sem repetição; } &lt;/style&gt; 
