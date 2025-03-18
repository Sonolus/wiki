# `UpdateLeadEvent`

## Message

```ts
type UpdateLeadEvent = {
    type: 'updateLead'
    lead: ServiceUserId | null
}
```

## Remarks

Upon receiving, client will:

-   Update lead to `lead`.
