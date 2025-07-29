# `ServerItemSection`

`ServerItemSection` fornece informações de uma seção de itens.

## Sintaxe

```ts
type ServerItemSection =
    | ServerItemSectionTyped<'post', PostItem>
    | ServerItemSectionTyped<'playlist', PlaylistItem>
    | ServerItemSectionTyped<'level', LevelItem>
    | ServerItemSectionTyped<'skin', SkinItem>
    | ServerItemSectionTyped<'background', BackgroundItem>
    | ServerItemSectionTyped<'effect', EffectItem>
    | ServerItemSectionTyped<'particle', ParticleItem>
    | ServerItemSectionTyped<'engine', EngineItem>
    | ServerItemSectionTyped<'replay', ReplayItem>
    | ServerItemSectionTyped<'room', RoomItem>

type ServerItemSectionTyped<TItemType, TItem> = {
    title: Text | (string & {})
    icon?: Icon | (string & {})
    description?: string
    help?: string
    itemType: TItemType
    items: TItem[]
    search?: ServerForm
    searchValues?: string
}
```

### `itemType`

Determina o tipo de itens.

### `searchValues`

Valores de pesquisa opcionais.

Se presente, o botão Mais estará disponível e clicar levará o jogador à lista com valores de pesquisa como consultas.

### `search`

Formulário de pesquisa opcional.

Se presente, o botão Pesquisar estará disponível e clicar nele abrirá um formulário de pesquisa com `searchValues` pré-preenchidos.

## Exemplos

```json
{
    "title": "#RECOMMENDED",
    "itemType": "level",
    "items": [
        // levels
    ]
}
```
