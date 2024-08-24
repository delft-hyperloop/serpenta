# Data

## Localiser

Drawing on SVG lines

```Typescript
$: emergPosition = (pathLength * (util.normalize($inputEmerg, max) / 100))
$: emergYPosition = 26;

$: if(progress_straight || progress_turn) {
    let normalized_loc = util.normalize(loc, max)
    let offset = pathLength - (pathLength * (normalized_loc / 100));

    point_start.style.fill = normalized_loc > 0 ? color_active : color_off;

    if (turning) {
        progress_turn.style.strokeDashoffset = offset.toString();
        point_divergence.style.fill = normalized_loc > 40 ? color_active : color_off;
        point_choice_turn.style.fill = normalized_loc > 73 ? color_active : color_off;
        point_end_turn.style.fill = normalized_loc >= 100 ? color_active : color_off;
        emergYPosition = progress_turn.getPointAtLength(emergPosition).y;
    } else {
        progress_straight.style.strokeDashoffset = offset.toString();
        point_divergence.style.fill = normalized_loc > 38 ? color_active : color_off;
        point_choice_straight.style.fill = normalized_loc > 62 ? color_active : color_off;
        point_end_straight.style.fill = normalized_loc >= 100 ? color_active : color_off;
        emergYPosition = progress_straight.getPointAtLength(emergPosition).y;
    }
}
```
