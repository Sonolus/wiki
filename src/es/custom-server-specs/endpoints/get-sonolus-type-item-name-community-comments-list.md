# `GET /sonolus/{type}/{itemName}/community/comments/list`

`/sonolus/{type}/{itemName}/community/comments/list` proporciona información de los comentarios del elemento con nombre `{itemName}` y la aplicación Sonolus lo utiliza para llenar la lista de comentarios de la sección de la comunidad de la vista de detalles del elemento del servidor.

## Parámetros de la URL

Parámetro | Valor | Descripción
:-- | :-- | :--
`type` | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, o `replays`.
`itemName` | `string` | Nombre del elemento.

## Parámetros de consulta (query)

Parámetro | Valor | Descripción
:-- | :-- | :--
`localization` | `string` | Ver [`localization`](../query-parameters/localization).
Opciones de configuración | `any` | Ver [Parámetro de Opciones](../query-parameters/options-query-parameters).
`page` | `number` | Ver [`page`](../query-parameters/page).
`cursor` | `string` | Ver [`cursor`](../query-parameters/cursor).

## Encabezados de la solicitud (header)

Encabezado | Valor | Descripción
:-- | :-- | :--
`Sonolus-Session` | `string` | Opcional, ver [`Sonolus-Session`](../headers/sonolus-session).

## Cuerpo de la solicitud (body)

Ninguno.

## Código de respuesta

Código | Descripción
:-- | :--
`200 OK` |
`401 Unauthorized` | Se requiere autenticación o esta ha expirado.
`404 Not Found` |

## Encabezados de respuesta (header)

Encabezado | Valor | Descripción
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, ver [`Sonolus-Version`](../headers/sonolus-version).

## Cuerpo de respuesta (body)

```ts
type ServerItemCommunityCommentList = {
    pageCount: number
    cursor?: string
    comments: ServerItemCommunityComment[]
}
```

### `pageCount`

Si se utiliza un valor negativo, la lista utiliza la paginación del cursor.

### `cursor`

Solo tiene efecto con la paginación del cursor. Si está presente, la página siguiente está disponible y se solicitará con el valor del cursor.

### `comments`

Se recomienda mantener cada página breve mostrando solo 10 comentarios.

## Ejemplos

```json
{
    "pageCount": 5,
    "comments": [
        // ...
    ]
}
```
