# Skin Sprite Name

While you can use any arbitrary string for skin sprite name, there are standardized skin sprite names that every skin is required to implement.

This requirement allows skins to be usable across different engines, and engines to be playable with other skins.

## Standardized Names

| Name                                        | Resizing   |
| ------------------------------------------- | ---------- |
| `#NOTE_HEAD_NEUTRAL`                        |            |
| `#NOTE_HEAD_RED`                            |            |
| `#NOTE_HEAD_GREEN`                          |            |
| `#NOTE_HEAD_BLUE`                           |            |
| `#NOTE_HEAD_YELLOW`                         |            |
| `#NOTE_HEAD_PURPLE`                         |            |
| `#NOTE_HEAD_CYAN`                           |            |
| `#NOTE_TICK_NEUTRAL`                        |            |
| `#NOTE_TICK_RED`                            |            |
| `#NOTE_TICK_GREEN`                          |            |
| `#NOTE_TICK_BLUE`                           |            |
| `#NOTE_TICK_YELLOW`                         |            |
| `#NOTE_TICK_PURPLE`                         |            |
| `#NOTE_TICK_CYAN`                           |            |
| `#NOTE_TAIL_NEUTRAL`                        |            |
| `#NOTE_TAIL_RED`                            |            |
| `#NOTE_TAIL_GREEN`                          |            |
| `#NOTE_TAIL_BLUE`                           |            |
| `#NOTE_TAIL_YELLOW`                         |            |
| `#NOTE_TAIL_PURPLE`                         |            |
| `#NOTE_TAIL_CYAN`                           |            |
| `#NOTE_CONNECTION_NEUTRAL`                  | Vertical   |
| `#NOTE_CONNECTION_RED`                      | Vertical   |
| `#NOTE_CONNECTION_GREEN`                    | Vertical   |
| `#NOTE_CONNECTION_BLUE`                     | Vertical   |
| `#NOTE_CONNECTION_YELLOW`                   | Vertical   |
| `#NOTE_CONNECTION_PURPLE`                   | Vertical   |
| `#NOTE_CONNECTION_CYAN`                     | Vertical   |
| `#NOTE_CONNECTION_NEUTRAL_SEAMLESS`         | Vertical   |
| `#NOTE_CONNECTION_RED_SEAMLESS`             | Vertical   |
| `#NOTE_CONNECTION_GREEN_SEAMLESS`           | Vertical   |
| `#NOTE_CONNECTION_BLUE_SEAMLESS`            | Vertical   |
| `#NOTE_CONNECTION_YELLOW_SEAMLESS`          | Vertical   |
| `#NOTE_CONNECTION_PURPLE_SEAMLESS`          | Vertical   |
| `#NOTE_CONNECTION_CYAN_SEAMLESS`            | Vertical   |
| `#SIMULTANEOUS_CONNECTION_NEUTRAL`          | Horizontal |
| `#SIMULTANEOUS_CONNECTION_RED`              | Horizontal |
| `#SIMULTANEOUS_CONNECTION_GREEN`            | Horizontal |
| `#SIMULTANEOUS_CONNECTION_BLUE`             | Horizontal |
| `#SIMULTANEOUS_CONNECTION_YELLOW`           | Horizontal |
| `#SIMULTANEOUS_CONNECTION_PURPLE`           | Horizontal |
| `#SIMULTANEOUS_CONNECTION_CYAN`             | Horizontal |
| `#SIMULTANEOUS_CONNECTION_NEUTRAL_SEAMLESS` | Horizontal |
| `#SIMULTANEOUS_CONNECTION_RED_SEAMLESS`     | Horizontal |
| `#SIMULTANEOUS_CONNECTION_GREEN_SEAMLESS`   | Horizontal |
| `#SIMULTANEOUS_CONNECTION_BLUE_SEAMLESS`    | Horizontal |
| `#SIMULTANEOUS_CONNECTION_YELLOW_SEAMLESS`  | Horizontal |
| `#SIMULTANEOUS_CONNECTION_PURPLE_SEAMLESS`  | Horizontal |
| `#SIMULTANEOUS_CONNECTION_CYAN_SEAMLESS`    | Horizontal |
| `#DIRECTIONAL_MARKER_NEUTRAL`               |            |
| `#DIRECTIONAL_MARKER_RED`                   |            |
| `#DIRECTIONAL_MARKER_GREEN`                 |            |
| `#DIRECTIONAL_MARKER_BLUE`                  |            |
| `#DIRECTIONAL_MARKER_YELLOW`                |            |
| `#DIRECTIONAL_MARKER_PURPLE`                |            |
| `#DIRECTIONAL_MARKER_CYAN`                  |            |
| `#SIMULTANEOUS_MARKER_NEUTRAL`              |            |
| `#SIMULTANEOUS_MARKER_RED`                  |            |
| `#SIMULTANEOUS_MARKER_GREEN`                |            |
| `#SIMULTANEOUS_MARKER_BLUE`                 |            |
| `#SIMULTANEOUS_MARKER_YELLOW`               |            |
| `#SIMULTANEOUS_MARKER_PURPLE`               |            |
| `#SIMULTANEOUS_MARKER_CYAN`                 |            |
| `#STAGE_MIDDLE`                             | Both       |
| `#STAGE_LEFT_BORDER`                        | Vertical   |
| `#STAGE_RIGHT_BORDER`                       | Vertical   |
| `#STAGE_TOP_BORDER`                         | Horizontal |
| `#STAGE_BOTTOM_BORDER`                      | Horizontal |
| `#STAGE_LEFT_BORDER_SEAMLESS`               | Vertical   |
| `#STAGE_RIGHT_BORDER_SEAMLESS`              | Vertical   |
| `#STAGE_TOP_BORDER_SEAMLESS`                | Horizontal |
| `#STAGE_BOTTOM_BORDER_SEAMLESS`             | Horizontal |
| `#STAGE_TOP_LEFT_CORNER`                    |            |
| `#STAGE_TOP_RIGHT_CORNER`                   |            |
| `#STAGE_BOTTOM_LEFT_CORNER`                 |            |
| `#STAGE_BOTTOM_RIGHT_CORNER`                |            |
| `#LANE`                                     | Vertical   |
| `#LANE_SEAMLESS`                            | Vertical   |
| `#LANE_ALTERNATIVE`                         | Vertical   |
| `#LANE_ALTERNATIVE_SEAMLESS`                | Vertical   |
| `#JUDGMENT_LINE`                            | Horizontal |
| `#NOTE_SLOT`                                |            |
| `#STAGE_COVER`                              | Both       |
| `#GRID_NEUTRAL`                             | Both       |
| `#GRID_RED`                                 | Both       |
| `#GRID_GREEN`                               | Both       |
| `#GRID_BLUE`                                | Both       |
| `#GRID_YELLOW`                              | Both       |
| `#GRID_PURPLE`                              | Both       |
| `#GRID_CYAN`                                | Both       |

## Resizing

For skin sprites with specified resizing, they are expected to remain presentable when stretch to arbitrary size in resizing directions.

## Seamless

Engines may use the seamless variants of skin sprites to create more complex graphics by joining multiple segments together, thus seamless variants are expected to remain presentable when used in such a manner.
