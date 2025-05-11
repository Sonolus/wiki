# `GET /sonolus/{type}/{itemName}/community/info`

`/sonolus/{type}/{itemName}/community/info` proporciona información de la comunidad del artículo con nombre `{itemName}` y la aplicación Sonolus lo utiliza para completar la sección de la comunidad de la vista de detalles del artículo del servidor.

## Parámetros de la URL

Parámetro | Valor | Descripción
:-- | :-- | :--
`type` | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, o `replays`.
`itemName` | `string` | Nombre del elemento.

## Parámetros de consulta (query)

Parámetro | Valor | Descripción
:-- | :-- | :--
`localization` | `string` | Ver [`localization`](../query-parameters/localization).
Opciones de configuración | `any` | Ver [Parámetros de Opciones](../query-parameters/options-query-parameters).

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
`401 Unauthorized` | Se requiere autenticación o ha expirado.
`404 Not Found` |

## Encabezados de respuesta (header)

Encabezado | Valor | Descripción
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, ver [`Sonolus-Version`](../headers/sonolus-version).

## Cuerpo de respuesta (body)

```ts
type ServerItemCommunityInfo = {
    actions: ServerForm[]
    topComments: ServerItemCommunityComment[]
}
```

## Ejemplos

```json
{
    "actions": [
        // ...
    ],
    "topComments": [
        // ...
    ]
}
```
