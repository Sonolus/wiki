# Configuração de repetição

A configuração de reprodução é usada pelo aplicativo Sonolus para preencher a interface de configuração de reprodução.

## Tipo de recurso

Recurso JSON.

`.json` é o único formato suportado e também deve ser compactado com GZip.

## Sintaxe

```ts
type ReplayConfiguration = {
    options: number[]
}
```

### `options`

Valores das opções de engine.

## Exemplos

```json
{
    "options": [
        // ...
    ]
}
```
