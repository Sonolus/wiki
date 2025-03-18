# `UpdateMasterEvent`

## Message

```ts
type UpdateMasterEvent = {
    type: 'updateMaster'
    master: ServiceUserId | null
}
```

## Remarks

Upon receiving, client will:

-   Update master to `master`.
