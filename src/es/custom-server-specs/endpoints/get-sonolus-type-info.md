# `GET /sonolus/{type}/info`

`/sonolus/{type}/info` proporciona información de los elementos y la aplicación Sonolus lo utiliza para completar la vista de información de los elementos del servidor.

## Parámetros de la URL

Parámetro | Valor | Descripción
:-- | :-- | :--
`type` | `string` | `posts`, `playlists`, `levels`, `skins`, `backgrounds`, `effects`, `particles`, `engines`, `replays`, o `rooms`.

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
`401 Unauthorized` | Se requiere autenticación o esta ha expirado.

## Encabezados de respuesta (header)

Encabezado | Valor | Descripción
:-- | :-- | :--
`Sonolus-Version` | `string` | Opcional, ver [`Sonolus-Version`](../headers/sonolus-version).

## Cuerpo de respuesta (body)

```ts
type ServerItemInfo = {
    creates?: ServerForm[]
    searches?: ServerForm[]
    sections: ServerItemSection[]
    banner?: Srl
}
```

## Ejemplos

```json
{
    "creates": [
        // ...
    ],
    "searches": [
        // ...
    ],
    "sections": [
        // ...
    ],
    "banner": {
        // ...
    }
}
```
