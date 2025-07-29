# `UpdateUserStatusesEvent`

## Mensagem

```ts
type UpdateUserStatusesEvent = {
    type: 'updateUserStatuses'
    userStatuses: UserStatusEntry[]
}
```

## Observações

Ao receber, o cliente deverá:

- Atualizar status de usuário para `userStatuses` .
