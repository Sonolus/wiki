# Replay Configuration

Replay Configuration digunakan oleh aplikasi Sonolus untuk mengisi antarmuka konfigurasi replay.

## Jenis Sumber Daya

Sumber daya JSON.

`.json` adalah satu-satunya format yang didukung, dan juga harus dikompresi GZip.

## Sintaks

```ts
type ReplayConfiguration = {
    options: number[]
}
```

### `options`

Nilai opsi mesin.

## Contoh

```json
{
    "options": [
        // ...
    ]
}
```
