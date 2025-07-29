# `Sonolus-Signature`

`Sonolus-Signature` fornece assinatura digital para a mensagem assinada pelo Sonolus.

## Sintaxe

```http
Sonolus-Signature: <value>
```

## Exemplos

```http
Sonolus-Signature: ...
```

## Observações

A mensagem é assinada usando ECDSA-SHA256, chave pública disponível no formato JSON Web Key:

```json
{
    "key_ops": ["verify"],
    "ext": true,
    "kty": "EC",
    "x": "d2B14ZAn-zDsqY42rHofst8rw3XB90-a5lT80NFdXo0",
    "y": "Hxzi9DHrlJ4CVSJVRnydxFWBZAgkFxZXbyxPSa8SJQw",
    "crv": "P-256"
}
```

O servidor deve usar assinatura para verificar se a mensagem é autêntica.
