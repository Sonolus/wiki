# `GET /sonolus/levels/result/info`

`/sonolus/levels/result/info` proporciona información sobre los resultados del nivel, y la aplicación de Sonolus lo utiliza para el envío de repeticiones desde la pantalla de resultados.

## Parámetros de la URL

Ninguno.

## Parámetros de consulta (query)

Parámetro | Valor | Descripción
:-- | :-- | :--
`localization` | `string` | Ver [`localization`](../query-parameters/localization).
Opciones de configuración | `any` | Ver [Options Query Parameters](../query-parameters/options-query-parameters).

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
type ServerLevelResultInfo = {
    submits?: ServerForm[]
}
```

### `submits`

Si está vacío o se omite, se considerará como si la capacidad de enviar repeticiones desde la pantalla de resultados no estuviera soportada.

## Ejemplos

```json
{
    "submits": [
        // ...
    ]
}
```
