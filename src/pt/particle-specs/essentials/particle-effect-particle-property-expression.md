# Efeito de Partícula Propriedade de Partícula Expressão

A expressão da propriedade de partículas do efeito de partículas fornece uma maneira simples, porém poderosa, para a partícula descrever sua propriedade.

## Expressão de propriedade

Cada saída de propriedade é calculada com base em sua expressão de propriedade, que é a soma de todas as entradas de propriedade multiplicada pelo coeficiente correspondente.

Veja o exemplo a seguir:

```json
{
    "x": {
        "c": 0.1,
        "cosr1": 0.2
    }
}
```

Ele será transformado com a seguinte lógica:

```ts
output.x = input.c * 0.1 + input.cosr1 * 0.2
```

## Entradas

Nome | Descrição
--- | ---
`c` | Igual a `1`
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
