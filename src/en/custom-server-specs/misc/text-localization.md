# Text Localization

Text localization allows texts to be localized based on player's Sonolus language.

## Basic Localization

When a key is used, it will be replaced with the key's localized text.

For example `#TITLE` will be replaced with `Title` if player's Sonolus language is set to English.

## Basic Interpolation

When a key followed by `:` is used, it will be replaced with the key's localized text with `{0}` interpolated with argument.

For example `#DAY_PAST:42` will be replaced with `interpolate(#DAY_PAST, "42")`. If player's Sonolus language is set to English, `#DAY_PAST`'s localized text is `{0}d ago`, and `interpolate(#DAY_PAST, "42")` evaluates to `42d ago`.

## Interpolation Fallback

When a key's localized text does not contain `{0}` for interpolation, argument will instead be appended at the end.

For example `#PREFIX_LIST:Hello World.` will be replaced with `interpolate(#PREFIX_LIST, "Hello World.")`. If player's Sonolus language is set to English, `#PREFIX_LIST`'s localized text is `- `, and `interpolate(#PREFIX_LIST, "Hello World.")` evaluates to `- Hello World.`.

## Nested Interpolation

Interpolation can be nested.

For example `#PUBLISHED:#SEPARATOR_COLON:#DAY_PAST:42` will be replaced with `interpolate(#PUBLISHED, interpolate(#SEPARATOR_COLON, interpolate(#DAY_PAST, "42")))`. If player's Sonolus language is set to English, `#PUBLISHED`, `#SEPARATOR_COLON`, and `#DAY_PAST`'s localized texts are `Published`, `: `, and `{0}d ago` respectively, and `interpolate(#PUBLISHED, interpolate(#SEPARATOR_COLON, interpolate(#DAY_PAST, "42")))` evaluates to `Published: 42d ago`.

## Interpolation Functions

Special interpolation functions can be used:

- `##`: Escapes argument. For example `##:#TITLE` evaluates to `#TITLE` (instead of `#TITLE`'s localized text).
- `##TIME_FULL`: Formatted full time. For example `##TIME_FULL:1767225600000` evaluates to 00:00 Jan 1st 2026, displayed using player's timezone and datetime formatting.
- `##TIME_RELATIVE`: Formatted relative time. For example `##TIME_FULL:1767225600000` evaluates to 00:00 Jan 1st 2026, displayed relative to current time using localized texts such as `#DAY_PAST` and `#DAY_FUTURE`.

## Multiline Interpolation

For multiline texts, interpolation will be applied to each line individually.
