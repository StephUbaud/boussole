let direction = 0
input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    serial.writeValue("x", input.magneticForce(Dimension.X))
    serial.writeValue("y", input.magneticForce(Dimension.Y))
    serial.writeValue("z", input.magneticForce(Dimension.Z))
    serial.writeValue("angle", input.compassHeading())
})
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 337.5 || direction <= 22.5) {
        basic.showArrow(ArrowNames.North)
    }
    if (direction > 22.5 && direction <= 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (direction > 67.5 && direction <= 112.5) {
        basic.showArrow(ArrowNames.West)
    }
    if (direction > 112.5 && direction <= 157.5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (direction > 157.5 && direction <= 202.5) {
        basic.showArrow(ArrowNames.South)
    }
    if (direction > 202.5 && direction <= 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (direction > 247.5 && direction <= 292.5) {
        basic.showArrow(ArrowNames.East)
    }
    if (direction > 292.5 && direction <= 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
