# Configuração de fundo

A configuração em segundo plano é usada pelo Sonolus para preencher a interface de configuração em segundo plano.

## Sintaxe

```ts
type BackgroundConfiguration = {
    scope?: string
    blur: number
    mask: string
}
```

### `scope`

A configuração é salva automaticamente e compartilhada entre todos os planos de fundo do mesmo escopo.

Sem especificar um escopo, a configuração será salva apenas para este plano de fundo.

### `blur`

Desfoque da imagem de fundo, de `0` a `1` .

### `mask`

Sequência de cores HTML para máscara sobreposta ao fundo.

Formatos suportados: `#RGB` , `#RRGGBB` , `#RGBA` e `#RRGGBBAA` .

## Exemplos

```json
{
    "blur": 0.05,
    "mask": "#00000080"
}
```
