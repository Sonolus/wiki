# Offsets

Offsets help synchronizing graphics, audio, and input.

For most players, 0 is the correct offset to use and should not be adjusted.

## Device Audio Offset

Device audio offset helps synchronizing graphics with audio, and it applies globally.

To adjust device audio offset:

-   Select a level that is properly synchronized.
-   Use watch mode.
-   Observe if graphics and audio are synchronized. For example when a note reaches the judgment line, the corresponding music and SFX also play at the same time.
-   If they are not synchronized, adjust device audio offset accordingly.

## SFX

If your graphics and audio are properly synchronized in watch mode, but in play mode your SFX has a significant delay, then the issue is that your device cannot play SFX quickly. Sonolus already plays SFX as soon as possible.

If you are using bluetooth headphones, they can introduce significant delay and are not recommended. Consider playing with speaker or wired headphones.

If you are on Android and SFX delay only starts happening recently, restarting your device can help by ensuring other apps are no longer taking up audio resources.

If the above do not fix the issue, you can turn off SFX or turn on Auto SFX in level configuration.

## Level and Server Audio Offsets

Level and server audio offsets apply to only a particular level, or all levels in a particular server.

These options are only useful when a particular level or all levels in a particular server are poorly synchronized, and should not be used otherwise.

## Device Input Offset

Device input offset helps synchronizing graphics with input, and it applies globally.

Before adjusting device input offset, you should determine whether your input issues are truly due to offset or not. If you mainly play another rhythm game and are used to it, it is common that many rhythm games have judgment delay due to them judging you by frame time, and you may have developed a habit of inputting early to compensate for this delay. Sonolus instead judges you fairly by using hardware time, and with the habit of inputting early you would receive many early judgments. It is recommended that you use replay to determine if you are receiving early judgments due to this habit, and if so consider correcting the habit rather than changing device input offset.

To adjust device input offset:

-   Select a level that you are comfortable playing.
-   Use play mode.
-   At result screen, scroll down and click into accuracy graph.
-   Add mean value to your current device input offset. For example if the mean value is 20, then add 20 to your current device input offset.

## Engine Input Offset

Engine input offset applies to only a particular engine.

This option is only useful when you have trouble playing with a particular engine, and should not be used otherwise.
