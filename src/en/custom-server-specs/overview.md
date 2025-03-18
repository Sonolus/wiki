# Overview

An overview of Sonolus custom servers.

## Technologies

Sonolus custom servers are powered by technologies like HTTP/HTTPS, WebSocket, JSON, SHA, and RSA.

These technologies are industry standard, battle tested, widely adopted, and language agnostic. They allow you to work with your favorite language and tools without being confined to what Sonolus team uses.

## Web Server

A Sonolus custom server fundamentally is a web server, with a set of predefined endpoints that Sonolus app understands.

This allows development of Sonolus custom servers to be flexible, as you can use any existing web development framework for it. It is also possible to use a static host serving files, allowing one to host their own custom server without the need of programming knowledge.

A Sonolus custom server acts as a passive information provider: when user interacts with Sonolus app and certain event happens, the app initiates communication to the server. There is no mechanism or need for server to client communication.
