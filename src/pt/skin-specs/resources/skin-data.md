# Dados da pele

Os dados da pele são usados pelo aplicativo Sonolus para controlar a renderização de uma pele.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type SkinData = {
    width: number
    height: number
    interpolation: boolean
    sprites: SkinDataSprite[]
}
```

### `width`

Largura da textura da pele.

### `height`

Altura da textura da pele.

### `interpolation`

É recomendado usar `false` para skins em estilo pixel art para preservar bordas nítidas, e `true` caso contrário.

## Exemplos

```json
{
    "width": 2048,
    "height": 2048,
    "interpolation": true,
    "sprites": [
        // ...
    ]
}
```
