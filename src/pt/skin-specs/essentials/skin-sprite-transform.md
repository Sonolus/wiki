# Transformação de Sprite de Pele

A transformação do sprite de pele fornece uma maneira simples, porém poderosa, para o sprite de pele manipular sua própria transformação durante a renderização.

## Transformar Expressão

Cada saída de propriedade é calculada com base em sua expressão de transformação, que é a soma de todas as entradas de propriedade multiplicada pelo coeficiente correspondente.

Veja o exemplo a seguir:

```json
{
    "x1": {
        "x1": 0.1,
        "y2": 0.2,
        "x3": 0.3,
        "y4": 0.4
    }
}
```

Ele será transformado com a seguinte lógica:

```ts
output.x1 = input.x1 * 0.1 + input.y2 * 0.2 + input.x3 * 0.3 + input.y4 * 0.4
```

## Entradas

Nome | Descrição
--- | ---
`x1` | `x1` recebido do motor
`y1` | `y1` recebido do motor
`x2` | `x2` recebido do motor
`y2` | `y2` recebido do motor
`x3` | `x3` recebido do motor
`y3` | `y3` recebido do motor
`x4` | `x4` recebido do motor
`y4` | `y4` recebido do motor

## Transformação de identidade

A transformação de identidade produz uma saída igual à entrada e pode ser usada quando a transformação não é necessária:

```json
{
    "x1": { "x1": 1 },
    "y1": { "y1": 1 },
    "x2": { "x2": 1 },
    "y2": { "y2": 1 },
    "x3": { "x3": 1 },
    "y3": { "y3": 1 },
    "x4": { "x4": 1 },
    "y4": { "y4": 1 }
}
```
