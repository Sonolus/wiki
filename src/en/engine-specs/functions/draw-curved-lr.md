# `DrawCurvedLR`

Draw a skin sprite with curved edges.

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
| z1       | Z1                               |
| a        | Alpha                            |
| n        | Number of segments               |
| p1       | P of control point on left edge  |
| q1       | Q of control point on left edge  |
| p2       | P of control point on right edge |
| q2       | Q of control point on right edge |
| z2?      | Z2                               |
| z3?      | Z3                               |
| z4?      | Z4                               |

## Return

`0`.

## Remarks

Points are in the order of bottom-left, top-left, top-right, bottom-right.

Control points are calculated by bilinear interpolation using `p1`, `q1`, `p2`, and `q2`, where bottom-left point is at `(-1, -1)` and top-right point is at `(1, 1)`.

Bézier curves are drawn on the curved edges with respective vertexes and control point.

Curved edges are drawn in segments. The bigger the number of segments, the smoother the curve, and the costlier the drawing.
