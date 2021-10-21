let direction = 0
input.calibrateCompass()
basic.forever(function () {
    serial.writeValue("x", input.magneticForce(Dimension.X))
    serial.writeValue("y", input.magneticForce(Dimension.Y))
    serial.writeValue("z", input.magneticForce(Dimension.Z))
})
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 337.5 && direction < 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
