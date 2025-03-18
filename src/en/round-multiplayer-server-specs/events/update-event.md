# `UpdateEvent`

## Message

```ts
type UpdateEvent = {
    type: 'update'
    allowOtherServers: boolean
    reportUserOptions: ServerForm[]
    title: string
    status: RoomStatus
    master: ServiceUserId | null
    lead: ServiceUserId | null
    options: ServerForm[]
    optionValues: string
    level: Sil | null
    levelOptions: LevelOptionEntry[]
    autoExit: AutoExit
    isSuggestionsLocked: boolean
    suggestions: Suggestion[]
    scoreboardDescription?: string
    scoreboardSections: ScoreboardSection[]
    results: ResultEntry[]
    users: RoomUser[]
    userStatuses: UserStatusEntry[]
}
```

## Remarks

Upon receiving, client will:

-   Raise a fatal error if `master` is not `null` but does not exist in `users`.
-   Raise a fatal error if `lead` is not `null` but does not exist in `users`.
-   Raise a fatal error if `options` is empty.
-   Raise a fatal error if `optionValues` is not a valid value for `options`.
-   Raise a fatal error if `status` is not selecting but `level` is `null`.
-   Raise a fatal error if `levelOptions` contains duplications.
-   Raise a fatal error if `suggestions` contains duplications.
-   Raise a fatal error if `users` contains duplications.
-   Raise a fatal error if `users` does not contain client's user.
-   Update state.
