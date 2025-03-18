# Overview

An overview of Sonolus round multiplayer servers.

## Technologies

Sonolus multiplayer servers are powered by technologies WebSocket, JSON, SHA, and ECDSA.

These technologies are industry standard, battle tested, widely adopted, and language agnostic. They allow you to work with your favorite language and tools without being confined to what Sonolus team uses.

## WebSocket Server

A Sonolus round multiplayer server fundamentally is a WebSocket server, with a set of predefined messages that Sonolus app understands.

This allows development of Sonolus custom servers to be flexible, as you can use any existing web development framework for it.

## Round Gameplay

Room has three phases: selecting, preparing, and playing.

-   During selecting: room lead can select which level to play, change standard level options and auto exit, and manage suggestions; other players can add levels to suggestions. Once room lead clicks confirm, room moves to preparing phase.
-   During preparing: every player can change configuration, and ready/skip. Once room master clicks start, room moves to playing phase.
-   During playing: readied players will start playing the level; skipped players remain in the room waiting for results and can participate in other activities such as chatting and suggesting for next round's level. Once room master clicks finish, room moves back to selecting phase.

## Room Master

Room master can:

-   Give room master to another player.
-   Change who is room lead.
-   Kick players.
-   Start and finish rounds.
-   Edit room options.

Server can set room master to `room` so no player is room master.

## Room Lead

Room lead can:

-   Select level.
-   Change standard level options.
-   Change auto exit.
-   Manage suggestions.

Server can set room lead to `room` so no player is room lead.

## Suggestions

Suggestions is a collaborative editing level list that can be used for multiple purposes:

-   As a way for other players to suggest levels to room lead.
-   As a playlist.
-   As a way for everyone to pick a level and randomize which one to be played.
-   As a way for a competitive match to do pick and bans.

## Chat

Chat serves as a way for players to communicate in a room.

Additionally, server can use chat to implement more complex features such as bot commands.

## Scoreboard

Scoreboard is completely customizable by the server, and can be used to implement any type of scoring.

Different scoreboard sections can be used to group players together, and can be used to represent teams.

Player scores are strings, so server use not just numbers but also texts such as "winner."
