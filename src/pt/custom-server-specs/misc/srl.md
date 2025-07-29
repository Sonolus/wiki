# `SRL`

`SRL` (Sonolus Resource Locator) fornece informações de um recurso para que o aplicativo Sonolus o localize, carregue e armazene em cache.

## Sintaxe

```ts
type Srl = {
    hash?: string | null
    url?: string | null
}
```

### `hash`

Hash SHA-1 opcional do recurso, usado para armazenamento em cache.

Se um recurso em cache com hash correspondente estiver disponível, ele será usado imediatamente.

### `url`

URL absoluta ou relativa do recurso.

Se uma URL relativa (uma URL que começa com `/` ) for usada, ela será relativa ao endereço do servidor (não à raiz do domínio).

## Exemplos

```json
{
    "hash": "...",
    "url": "https:// ..."
}
```

## Observações

Embora `hash` seja opcional, é altamente recomendável permitir que o aplicativo Sonolus use recursos em cache, melhorando assim a experiência do jogador ao reduzir o uso de largura de banda e o tempo de carregamento.
