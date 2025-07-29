# Nome do Sprite da Pele

Embora você possa usar qualquer sequência arbitrária para o nome do sprite da skin, há nomes de sprites de skin padronizados que toda skin deve implementar.

Esse requisito permite que as skins sejam utilizáveis em diferentes engines e que as engines sejam jogáveis com outras skins.

## Nomes padronizados

Nome | Redimensionamento
--- | ---
`#NOTE_HEAD_NEUTRAL` |
`#NOTE_HEAD_RED` |
`#NOTE_HEAD_GREEN` |
`#NOTE_HEAD_BLUE` |
`#NOTE_HEAD_YELLOW` |
`#NOTE_HEAD_PURPLE` |
`#NOTE_HEAD_CYAN` |
`#NOTE_TICK_NEUTRAL` |
`#NOTE_TICK_RED` |
`#NOTE_TICK_GREEN` |
`#NOTE_TICK_BLUE` |
`#NOTE_TICK_YELLOW` |
`#NOTE_TICK_PURPLE` |
`#NOTE_TICK_CYAN` |
`#NOTE_TAIL_NEUTRAL` |
`#NOTE_TAIL_RED` |
`#NOTE_TAIL_GREEN` |
`#NOTE_TAIL_BLUE` |
`#NOTE_TAIL_YELLOW` |
`#NOTE_TAIL_PURPLE` |
`#NOTE_TAIL_CYAN` |
`#NOTE_CONNECTION_NEUTRAL` | Vertical
`#NOTE_CONNECTION_RED` | Vertical
`#NOTE_CONNECTION_GREEN` | Vertical
`#NOTE_CONNECTION_BLUE` | Vertical
`#NOTE_CONNECTION_YELLOW` | Vertical
`#NOTE_CONNECTION_PURPLE` | Vertical
`#NOTE_CONNECTION_CYAN` | Vertical
`#NOTE_CONNECTION_NEUTRAL_SEAMLESS` | Vertical
`#NOTE_CONNECTION_RED_SEAMLESS` | Vertical
`#NOTE_CONNECTION_GREEN_SEAMLESS` | Vertical
`#NOTE_CONNECTION_BLUE_SEAMLESS` | Vertical
`#NOTE_CONNECTION_YELLOW_SEAMLESS` | Vertical
`#NOTE_CONNECTION_PURPLE_SEAMLESS` | Vertical
`#NOTE_CONNECTION_CYAN_SEAMLESS` | Vertical
`#SIMULTANEOUS_CONNECTION_NEUTRAL` | Horizontal
`#SIMULTANEOUS_CONNECTION_RED` | Horizontal
`#SIMULTANEOUS_CONNECTION_GREEN` | Horizontal
`#SIMULTANEOUS_CONNECTION_BLUE` | Horizontal
`#SIMULTANEOUS_CONNECTION_YELLOW` | Horizontal
`#SIMULTANEOUS_CONNECTION_PURPLE` | Horizontal
`#SIMULTANEOUS_CONNECTION_CYAN` | Horizontal
`#SIMULTANEOUS_CONNECTION_NEUTRAL_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_RED_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_GREEN_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_BLUE_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_YELLOW_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_PURPLE_SEAMLESS` | Horizontal
`#SIMULTANEOUS_CONNECTION_CYAN_SEAMLESS` | Horizontal
`#DIRECTIONAL_MARKER_NEUTRAL` |
`#DIRECTIONAL_MARKER_RED` |
`#DIRECTIONAL_MARKER_GREEN` |
`#DIRECTIONAL_MARKER_BLUE` |
`#DIRECTIONAL_MARKER_YELLOW` |
`#DIRECTIONAL_MARKER_PURPLE` |
`#DIRECTIONAL_MARKER_CYAN` |
`#SIMULTANEOUS_MARKER_NEUTRAL` |
`#SIMULTANEOUS_MARKER_RED` |
`#SIMULTANEOUS_MARKER_GREEN` |
`#SIMULTANEOUS_MARKER_BLUE` |
`#SIMULTANEOUS_MARKER_YELLOW` |
`#SIMULTANEOUS_MARKER_PURPLE` |
`#SIMULTANEOUS_MARKER_CYAN` |
`#STAGE_MIDDLE` | Ambos
`#STAGE_LEFT_BORDER` | Vertical
`#STAGE_RIGHT_BORDER` | Vertical
`#STAGE_TOP_BORDER` | Horizontal
`#STAGE_BOTTOM_BORDER` | Horizontal
`#STAGE_LEFT_BORDER_SEAMLESS` | Vertical
`#STAGE_RIGHT_BORDER_SEAMLESS` | Vertical
`#STAGE_TOP_BORDER_SEAMLESS` | Horizontal
`#STAGE_BOTTOM_BORDER_SEAMLESS` | Horizontal
`#STAGE_TOP_LEFT_CORNER` |
`#STAGE_TOP_RIGHT_CORNER` |
`#STAGE_BOTTOM_LEFT_CORNER` |
`#STAGE_BOTTOM_RIGHT_CORNER` |
`#LANE` | Vertical
`#LANE_SEAMLESS` | Vertical
`#LANE_ALTERNATIVE` | Vertical
`#LANE_ALTERNATIVE_SEAMLESS` | Vertical
`#JUDGMENT_LINE` | Horizontal
`#NOTE_SLOT` |
`#STAGE_COVER` | Ambos
`#GRID_NEUTRAL` | Ambos
`#GRID_RED` | Ambos
`#GRID_GREEN` | Ambos
`#GRID_BLUE` | Ambos
`#GRID_YELLOW` | Ambos
`#GRID_PURPLE` | Ambos
`#GRID_CYAN` | Ambos

## Redimensionamento

Para sprites de pele com redimensionamento especificado, espera-se que eles permaneçam apresentáveis quando esticados para um tamanho arbitrário nas direções de redimensionamento.

## Sem costura

Os mecanismos podem usar variantes contínuas de sprites de skin para criar gráficos mais complexos unindo vários segmentos, portanto, espera-se que variantes contínuas permaneçam apresentáveis quando usadas dessa maneira.
