# `ChatMessage`

Chat message.

## Syntax

```ts
type ChatMessage = TextChatMessage | QuickChatMessage

type QuickChatMessage = {
    userId: ServiceUserId
    type: 'quick'
    value: 'hello' | 'glhf' | 'gg' | 'ns' | 'ty'
}

type TextChatMessage = {
    userId: ServiceUserId | null
    type: 'text'
    value: string
}
```
