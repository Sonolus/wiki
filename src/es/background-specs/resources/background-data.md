# Datos del fondo

La aplicación Sonolus utiliza los datos del fondo para controlar el renderizado de un fondo.

## Tipo de recurso

Recurso JSON.

`.json` es el único formato admitido y también debe estar comprimido en GZip.

## Sintaxis

```ts
type BackgroundData = {
    aspectRatio?: number
    fit: 'width' | 'height' | 'contain' | 'cover'
    color: string
}
```

### `aspectRatio`

Relación de aspecto opcional de la imagen de fondo.

Si se especifica, la imagen de fondo de ajustará forzosamente a la relación de aspecto indicada en lugar de usar su relación de aspecto natural.

### `fit`

Estrategia de ajuste cuando la relación de aspecto de la imagen de fondo no coincide con la relación de aspecto de la pantalla.

### `color`

Cadena de color HTML para el color de fondo.

Formatos admitidos: `#RGB` y `#RRGGBB` .

## Ejemplos

```json
{
    "aspectRatio": 1.778,
    "fit": "cover",
    "color": "#000000"
}
```
