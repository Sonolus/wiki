# Deep Links and Share Links

Deep links and share links help bridging Sonolus with the outside world.

## Deep Links

Deep links are URLs which upon being clicked will take user to Sonolus app and open the linked content.

Deep links serve as the internal mechanism for guiding users from the outside world (for example a webpage) to Sonolus. However, they are not meant to be shared directly, due to that deep links only work for users that already have Sonolus app installed.

Deep links are regular URLs with `sonolus` scheme, which mirrors closely to Sonolus endpoints. Using a server with address `https://example.com/server` as example:

-   `sonolus://example.com/server` will open the server.
-   `sonolus://example.com/server/levels/list` will open the server's level list. Query parameters apply.
-   `sonolus://example.com/server/levels/{name}` will open the server's level of name `{name}`.
-   Similarly for `skins`, `backgrounds`, `effects`, `particles`, and `engines`.

## Share Links

Share links are URLs which show information of the linked content in web browsers.

Share links serve as the public mechanism for allowing users to share contents in Sonolus to the outside world. In Sonolus app, users can use the share buttons to obtain share links and post them to websites, social medias, messengers, etc. Receivers can then open share links in web browsers to preview the linked contents.

Servers should implement all share links as web pages that provide information of the linked contents, with an "open in Sonolus" button which triggers the corresponding deep link as well as instructions for users that do not have Sonolus app installed yet.

Share links are regular URLs, which mirrors closely to Sonolus endpoints. Using a server with address `https://example.com/server` as example:

-   `https://example.com/server` should display information of the server.
-   `https://example.com/server/levels/list` should display information of the server's level list. Query parameters apply.
-   `https://example.com/server/levels/{name}` should display information of the server's level of name `{name}`.
-   Similarly for `skins`, `backgrounds`, `effects`, `particles`, and `engines`.
