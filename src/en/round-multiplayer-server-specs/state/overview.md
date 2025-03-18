# Overview

An overview of state of Sonolus round multiplayer server.

## State Management

Server owns the room state and acts as authoritative figure.

Server and client communicate using WebSocket messages. Messages from server to clients are called events, messages from clients to server are called commands.

Client upon joining the room, first receives an `UpdateEvent` and makes a local copy of the room state. When server changes the room state, server sends corresponding events to clients, and clients mutate their local copies of the room state accordingly. When client performs an action, a command is sent to server, and server decides if and how the room state should be mutated.

To improve UX in latency situations, client has optimistic update. This means that clients may send invalid commands to server, and server should be tolerant to invalid commands. However client is not tolerant to invalid events, so server needs to ensure server and client states are always in sync and events are always valid.

## Initialization and Suspension

When client first connects to the server, it's in an uninitialized state, and will ignore all received messages until an `UpdateEvent`.

When client starts gameplay, it enters a suspended state, and ignores all received messages.

When client exits gameplay, it sends a `FinishGameplayCommand` and reverts back to uninitialized state, awaiting an `UpdateEvent`.

## Optimizations

Events are designed in a way to accommodate common state mutations such that multiplayer server can scale with large amount of players.

For example, when a player has finished gameplay and server needs to update the score of said player, server sending the entire scoreboard (`n` players' scores) to all clients (`n` players) would result in an `O(n^2)` update complexity.

Instead, server can send a specialized event achieving `O(n)`.
