direction = 0

def on_button_pressed_a():
    input.calibrate_compass()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    serial.write_value("x", input.magnetic_force(Dimension.X))
    serial.write_value("y", input.magnetic_force(Dimension.Y))
    serial.write_value("z", input.magnetic_force(Dimension.Z))
    serial.write_value("angle", input.compass_heading())
basic.forever(on_forever)

def on_forever2():
    global direction
    direction = input.compass_heading()
    if direction > 337.5 or direction <= 22.5:
        basic.show_arrow(ArrowNames.NORTH)
    if direction > 22.5 and direction <= 67.5:
        basic.show_arrow(ArrowNames.NORTH_WEST)
    if direction > 67.5 and direction <= 112.5:
        basic.show_arrow(ArrowNames.WEST)
    if direction > 112.5 and direction <= 157.5:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    if direction > 157.5 and direction <= 202.5:
        basic.show_arrow(ArrowNames.SOUTH)
    if direction > 202.5 and direction <= 247.5:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    if direction > 247.5 and direction <= 292.5:
        basic.show_arrow(ArrowNames.EAST)
    if direction > 292.5 and direction <= 337.5:
        basic.show_arrow(ArrowNames.NORTH_EAST)
basic.forever(on_forever2)
