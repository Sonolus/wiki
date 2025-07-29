# Dados de fundo

Os dados de fundo são usados pelo Sonolus para controlar a renderização de um fundo.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type BackgroundData = {
    aspectRatio?: number
    fit: 'width' | 'height' | 'contain' | 'cover'
    color: string
}
```

### `aspectRatio`

Proporção de aspecto opcional da imagem de fundo.

Se presente, a imagem de fundo será forçada para a proporção de aspecto específica em vez da proporção de aspecto natural.

### `fit`

Estratégia de ajuste quando a proporção da imagem de fundo não corresponde à proporção da tela.

### `color`

Sequência de caracteres de cor HTML para cor de fundo.

Formatos suportados: `#RGB` e `#RRGGBB` .

## Exemplos

```json
{
    "aspectRatio": 1.778,
    "fit": "cover",
    "color": "#000000"
}
```
