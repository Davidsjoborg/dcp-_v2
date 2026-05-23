function targetStopp() {
    
    if (X_TC > 7) {
        X_TC = 7
    }
    
    if (Y_TC > 7) {
        Y_TC = 7
    }
    
    if (X_TC < 0) {
        X_TC = 0
    }
    
    if (Y_TC < 0) {
        Y_TC = 0
    }
    
}

function Win() {
    // IF target over laps with player
    display.clear()
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Yellow))
    display.show()
    basic.showNumber(StepCount)
}

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function UpButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    // led.unplot(X_C, Y_C)
    Y_C -= 1
    StepCount += 1
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        // Makes you go to the other side
        if (Y_C < 0) {
            Y_C = 7
        }
        
        // led.plot(X_C, Y_C)
        // led.unplot(X_TC, Y_TC)
        X_TC = X_TC + randint(-1, 1)
        Y_TC = Y_TC + randint(-1, 1)
        targetStopp()
        display.clear()
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.show()
        // led.plot(X_TC, Y_TC)
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function DownButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    // led.unplot(X_C, Y_C)
    Y_C += 1
    StepCount += 1
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        // Makes you go to the other side
        if (Y_C > 7) {
            Y_C = 0
        }
        
        // led.plot(X_C, Y_C)
        // led.unplot(X_TC, Y_TC)
        X_TC = X_TC + randint(-1, 1)
        Y_TC = Y_TC + randint(-1, 1)
        targetStopp()
        display.clear()
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.show()
        // led.plot(X_TC, Y_TC)
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function LeftButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    // led.unplot(X_C, Y_C)
    X_C -= 1
    StepCount += 1
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        // Makes you go to the other side
        if (X_C < 0) {
            X_C = 7
        }
        
        // led.plot(X_C, Y_C)
        // led.unplot(X_TC, Y_TC)
        X_TC = X_TC + randint(-1, 1)
        Y_TC = Y_TC + randint(-1, 1)
        targetStopp()
        display.clear()
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.show()
        // led.plot(X_TC, Y_TC)
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function RightButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    // led.unplot(X_C, Y_C)
    X_C += 1
    StepCount += 1
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        // Makes you go to the other side
        if (X_C > 7) {
            X_C = 0
        }
        
        // led.plot(X_C, Y_C)
        // led.unplot(X_TC, Y_TC)
        X_TC = X_TC + randint(-1, 1)
        Y_TC = Y_TC + randint(-1, 1)
        targetStopp()
        display.clear()
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.show()
        // led.plot(X_TC, Y_TC)
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
let display = GAME_ZIP64.createZIP64Display()
display.setBrightness(10)
display.clear()
//  Setup the start Screen
let StepCount = 0
let X_C = randint(0, 7)
let Y_C = randint(0, 7)
let X_TC = randint(0, 7)
let Y_TC = randint(0, 7)
// Changes cordinates if there the same on start
if (X_C == X_TC && Y_C == Y_TC) {
    Y_C = randint(0, 7)
    X_C = randint(0, 7)
    Y_TC = randint(0, 7)
    X_TC = randint(0, 7)
}

// display: GAME_ZIP64.ZIP64Display = None
// display = GAME_ZIP64.create_zip64_display()
// display.clear()
// display.set_brightness(10)
display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
// display.show()
// display.show_color(GAME_ZIP64.colors(ZipLedColors.RED))
// display.set_pixel_color_at(0, GAME_ZIP64.colors(ZipLedColors.BLUE))
// display.set_matrix_color(2, 2, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.show()
