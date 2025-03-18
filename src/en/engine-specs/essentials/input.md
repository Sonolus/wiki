# Input

Essential topics related to input.

## Input Pooling

Inputs received from operating system can happen at anytime during an update cycle and is impossible to be processed immediately. Thus, all inputs are pooled, combined, and processed in the next update cycle.

Due to this, when processing inputs it is important to keep a few things in mind.

### A Touch can be Both Started and Ended

It is possible that user starts a new touch and releases it within the same update cycle, if fast enough physically or frame rate drops unexpectedly.

### Inputs Happened in the Past

Because they are pooled since the last update cycle.

When judging user input, it's important to use system reported time if possible, rather than the current time.

### Use Touch st Correctly

Touch st is the starting time of the touch reported by system.

It will always be an accurate representation of when user started a touch.

### Use Touch t Correctly

Touch t is the time of the touch event reported by system.

When touch ended is true, it will always be an accurate representation of when user released a touch; otherwise, touch t is not reliable.

It's tempting to use touch t to judge when user moves their touch, however the behavior may vary between systems. Some system will only report one move event (and thus touch t is not changing), yet touch position continues to change due to inertia or system level processing.

## Input Offset

There is a unavoidable delay between when user physically touches the screen, and when operating system actually receives it. Thus Sonolus offers input offset calibration, and when judging engines should take this offset into account.

Values of touch t and st already have input offset taken into account.

You can obtain input offset from Runtime Environment block.
