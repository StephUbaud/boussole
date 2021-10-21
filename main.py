serial.write_value("x", input.magnetic_force(Dimension.X))
serial.write_value("y", input.magnetic_force(Dimension.Y))
serial.write_value("z", input.magnetic_force(Dimension.Z))

def on_forever():
    input.calibrate_compass()
basic.forever(on_forever)
