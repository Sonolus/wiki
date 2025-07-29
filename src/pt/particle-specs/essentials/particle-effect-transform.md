# Transformação de Efeito de Partícula

A transformação de efeito de partículas fornece uma maneira simples, porém poderosa, para o efeito de partículas manipular sua própria transformação durante a renderização.

## Transformar Expressão

Cada saída de propriedade é computada com base em sua expressão de transformação, que é a soma de todas as entradas de propriedade multiplicada pelo coeficiente correspondente.

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
`c` | Igual a `1`
`x1` | `x1` recebido do motor
`y1` | `y1` recebido do motor
`x2` | `x2` recebido do motor
`y2` | `y2` recebido do motor
`x3` | `x3` recebido do motor
`y3` | `y3` recebido do motor
`x4` | `x4` recebido do motor
`y4` | `y4` recebido do motor
`r1` | Valor aleatório no intervalo de `0` a `1`
`r2` | Valor aleatório no intervalo de `0` a `1`
`r3` | Valor aleatório no intervalo de `0` a `1`
`r4` | Valor aleatório no intervalo de `0` a `1`
`r5` | Valor aleatório no intervalo de `0` a `1`
`r6` | Valor aleatório no intervalo de `0` a `1`
`r7` | Valor aleatório no intervalo de `0` a `1`
`r8` | Valor aleatório no intervalo de `0` a `1`
`sinr1` | É igual a `sin(2 * PI * r1)`
`sinr2` | É igual a `sin(2 * PI * r2)`
`sinr3` | É igual a `sin(2 * PI * r3)`
`sinr4` | É igual a `sin(2 * PI * r4)`
`sinr5` | É igual a `sin(2 * PI * r5)`
`sinr6` | É igual a `sin(2 * PI * r6)`
`sinr7` | É igual a `sin(2 * PI * r7)`
`sinr8` | É igual a `sin(2 * PI * r8)`
`cosr1` | Igual a `cos(2 * PI * r1)`
`cosr2` | Igual a `cos(2 * PI * r2)`
`cosr3` | Igual a `cos(2 * PI * r3)`
`cosr4` | Igual a `cos(2 * PI * r4)`
`cosr5` | Igual a `cos(2 * PI * r5)`
`cosr6` | Igual a `cos(2 * PI * r6)`
`cosr7` | Igual a `cos(2 * PI * r7)`
`cosr8` | Igual a `cos(2 * PI * r8)`

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
