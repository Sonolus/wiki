# Configuración del fondo

La aplicación de Sonolus utiliza la configuración de fondo para llenar la interfaz de configuración de fondo.

## Sintaxis

```ts
type BackgroundConfiguration = {
    scope?: string
    blur: number
    mask: string
}
```

### `scope`

La configuración se guarda y se comparte automáticamente entre todos los fondos del mismo ámbito (scope).

Sin no se especifica un ámbito, la configuración se guardará solo para este fondo.

### `blur`

Desenfoque de la imagen de fondo, de `0` a `1` .

### `mask`

Cadena de color HTML para la máscara superpuesta sobre el fondo.

Formatos admitidos: `#RGB` , `#RRGGBB` , `#RGBA` y `#RRGGBBAA` .

## Ejemplos

```json
{
    "blur": 0.05,
    "mask": "#00000080"
}
```
