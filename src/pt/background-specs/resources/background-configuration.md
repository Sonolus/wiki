# Configuração de fundo

A configuração em segundo plano é usada pelo Sonolus para preencher a interface de configuração em segundo plano.

## Sintaxe

```ts
tipo BackgroundConfiguration = {
escopo?: string
desfoque: número
máscara: string
}
```

### `escopo`

A configuração é salva automaticamente e compartilhada entre todos os planos de fundo do mesmo escopo.

Sem especificar um escopo, a configuração será salva apenas para este plano de fundo.

### `Desfoque`

Desfoque da imagem de fundo, de `0` a `1` .

### `máscara`

Sequência de cores HTML para máscara sobreposta ao fundo.

Formatos suportados: `#RGB` , `#RRGGBB` , `#RGBA` e `#RRGGBBAA` .

## Exemplos

```json
{
"Desfoque": 0.05,
"Máscara": "#00000080"
}
```
