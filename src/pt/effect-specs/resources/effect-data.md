# Dados de efeito

Os dados de efeito são usados pelo aplicativo Sonolus para controlar a reprodução de um efeito.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type EffectData = {
    clips: EffectDataClip[]
}
```

## Exemplos

```json
{
    "clips": [
        // ...
    ]
}
```
