# Dados de fundo

Os dados de fundo são usados pelo Sonolus para controlar a renderização de um fundo.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
tipo BackgroundData = { aspectRatio: número ajuste: 'largura' | 'altura' | 'contém' | 'capa' cor: string }
```

### `Proporção de aspecto`

Proporção da imagem de fundo.

### `ajustar`

Estratégia de ajuste quando a proporção da imagem de fundo não corresponde à proporção da tela.

### `cor`

Sequência de caracteres de cor HTML para cor de fundo.

Formatos suportados: `#RGB` e `#RRGGBB` .

## Exemplos

```json
{ "aspectRatio": 1.778, "fit": "capa", "cor": "#000000" }
```
