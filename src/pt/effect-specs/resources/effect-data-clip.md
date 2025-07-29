# Clipe de dados de efeito

O clipe de dados de efeito é usado pelo aplicativo Sonolus para controlar a reprodução de um clipe de efeito.

## Sintaxe

```ts
type EffectDataClip = {
    name: EffectClipName | (string & {})
    filename: string
}
```

### `name`

Veja [Nome do clipe de efeito](../essentials/effect-clip-name) .

### `filename`

Nome do arquivo do clipe de efeito dentro do áudio do efeito.

## Exemplos

```json
{
    "name": "#PERFECT",
    "filename": "perfect.mp3"
}
```
