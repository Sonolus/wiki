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

type TextChatMessage = UserTextChatMessage | RoomTextChatMessage

type UserTextChatMessage = {
    userId: ServiceUserId
    type: 'text'
    value: string
}

type RoomTextChatMessage = {
    userId: null
    type: 'text'
    value: Text | (string & {})
}
```
