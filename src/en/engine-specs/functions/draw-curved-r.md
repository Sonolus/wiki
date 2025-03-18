# `DrawCurvedR`

Draw a skin sprite with curved edge.

## Arguments

| Argument | Description                      |
| -------- | -------------------------------- |
| id       | Sprite identifier                |
| x1       | X1                               |
| y1       | Y1                               |
| x2       | X2                               |
| y2       | Y2                               |
| x3       | X3                               |
| y3       | Y3                               |
| x4       | X4                               |
| y4       | Y4                               |
| z        | Z                                |
| a        | Alpha                            |
| n        | Number of segments               |
| p        | P of control point on right edge |
| q        | Q of control point on right edge |

## Return

`0`.

## Remarks

Points are in the order of bottom-left, top-left, top-right, bottom-right.

Control point is calculated by bilinear interpolation using `p` and `q`, where bottom-left point is at `(-1, -1)` and top-right point is at `(1, 1)`.

A Bézier curve is drawn on the curved edge with respective vertexes and control point.

Curved edges are drawn in segments. The bigger the number of segments, the smoother the curve, and the costlier the drawing.
