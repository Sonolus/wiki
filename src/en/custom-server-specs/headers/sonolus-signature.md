# `Sonolus-Signature`

`Sonolus-Signature` provides digital signature for the message signed by Sonolus.

## Syntax

```http
Sonolus-Signature: <value>
```

## Examples

```http
Sonolus-Signature: ...
```

## Remarks

Message is signed using ECDSA-SHA256, public key available in JSON Web Key format:

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

Server should use signature to verify that the message is authentic.
