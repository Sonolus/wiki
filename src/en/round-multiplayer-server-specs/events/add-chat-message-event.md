# `AddChatMessageEvent`

## Message

```ts
type AddChatMessageEvent = {
    type: 'addChatMessage'
    nonce?: number
    message: ChatMessage
}
```

## Remarks

## Remarks

Upon receiving, client will:

-   Add `message`.

If the chat message event is caused by an `AddChatMessageCommand`, `nonce` should have the same value as the command for sender's client. For other clients, `nonce` should be omitted.
