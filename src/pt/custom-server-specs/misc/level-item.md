# `LevelItem`

`LevelItem` fornece informações de um nível.

## Sintaxe

```ts
type LevelItem = {
    name: string
    source?: string
    version: 1
    rating: number
    title: string
    artists: string
    author: string
    tags: Tag[]
    engine: EngineItem
    useSkin: UseItem<SkinItem>
    useBackground: UseItem<BackgroundItem>
    useEffect: UseItem<EffectItem>
    useParticle: UseItem<ParticleItem>
    cover: SRL
    bgm: SRL
    preview?: SRL
    data: SRL
}

type UseItem<T> =
    | {
          useDefault: true
      }
    | {
          useDefault: false
          item: T
      }
```

### `name`

Nome exclusivo que identifica o nível.

### `source`

Endereço do servidor de origem.

Fornecer uma fonte permite que a Sonolus atualize o item na coleção e use o item no modo multijogador.

### `UseItem<T>`

Se `useDefault` for `true` , o nível usará o item padrão do mecanismo do nível.

Caso contrário, `item` é usado.

## Exemplos

```json
{
    "name": "bandori-1-expert",
    "version": 1,
    "rating": 20,
    "title": "Yes! BanG_Dream!",
    "artists": "Poppin'Party",
    "author": "BanG Dream! Girls Band Party!",
    "tags": [
        // ...
    ],
    "engine": {
        // ...
    },
    "useSkin": {
        "useDefault": true
    },
    "useBackground": {
        "useDefault": true
    },
    "useEffect": {
        "useDefault": false,
        "item": {
            // ...
        }
    },
    "useParticle": {
        "useDefault": false,
        "item": {
            // ...
        }
    },
    "cover": {
        // ...
    },
    "bgm": {
        // ...
    },
    "data": {
        // ...
    }
}
```
