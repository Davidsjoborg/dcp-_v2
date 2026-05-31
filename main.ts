// Version 5 OK
function targetStopp_v2() {
    
    if (Level > 2) {
        if (X_TC > 7) {
            X_TC = 0
        }
        
        if (Y_TC > 7) {
            Y_TC = 0
        }
        
        if (X_TC < 0) {
            X_TC = 7
        }
        
        if (Y_TC < 0) {
            Y_TC = 7
        }
        
    } else {
        targetStopp()
    }
    
}

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
    basic.pause(2000)
    X_C = randint(0, 7)
    Y_C = randint(0, 7)
    X_TC = randint(0, 7)
    Y_TC = randint(0, 7)
    display.clear()
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
    display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
    Level += 1
    basic.showNumber(Level)
    Rand_top += 1
    Rand_bottom -= 1
    if (Rand_top > 2) {
        Rand_top = 2
        Rand_bottom = -2
    }
    
}

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function UpButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    StepCount += 1
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)
    // Makes movement number randome again
    if (RandInt_X == 0 && RandInt_Y == 0) {
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)
    }
    
    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y
    if (X_C == X_TC || Y_C - 1 == Y_TC) {
        X_TC = X_TC - RandInt_X
        Y_TC = Y_TC - RandInt_Y
    }
    
    targetStopp_v2()
    display.clear()
    display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
    display.show()
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        basic.pause(150)
        Y_C -= 1
        if (Y_C < 0) {
            Y_C = 7
        }
        
        display.clear()
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function DownButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    StepCount += 1
    // IF target over laps with player
    // if X_C == X_TC and Y_C == Y_TC:
    // Win()
    // else:
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)
    // Makes movement number randome again
    if (RandInt_X == 0 && RandInt_Y == 0) {
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)
    }
    
    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y
    if (X_C == X_TC || Y_C + 1 == Y_TC) {
        X_TC = X_TC - RandInt_X
        Y_TC = Y_TC - RandInt_Y
    }
    
    targetStopp_v2()
    display.clear()
    display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
    display.show()
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        basic.pause(150)
        Y_C += 1
        if (Y_C > 7) {
            Y_C = 0
        }
        
        display.clear()
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function LeftButtonClick() {
    
    GAME_ZIP64.runMotor(50)
    StepCount += 1
    // IF target over laps with player
    // if X_C == X_TC and Y_C == Y_TC:
    // Win()
    // else:
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)
    // Makes movement number randome again
    if (RandInt_X == 0 && RandInt_Y == 0) {
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)
    }
    
    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y
    if (X_C - 1 == X_TC || Y_C == Y_TC) {
        X_TC = X_TC - RandInt_X
        Y_TC = Y_TC - RandInt_Y
    }
    
    targetStopp_v2()
    display.clear()
    display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
    display.show()
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        basic.pause(150)
        X_C -= 1
        if (X_C < 0) {
            X_C = 7
        }
        
        display.clear()
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
        // IF target over laps with player
        if (X_C == X_TC && Y_C == Y_TC) {
            Win()
        }
        
    }
    
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function RightButtonClick() {
    
    // basic.show_string("R")
    // basic.pause(2000)
    GAME_ZIP64.runMotor(50)
    // led.unplot(X_C, Y_C)
    // X_C += 1
    StepCount += 1
    // IF target over laps with player
    // if X_C == X_TC and Y_C == Y_TC:
    // Win()
    // else:
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)
    // Makes movement number randome again
    if (RandInt_X == 0 && RandInt_Y == 0) {
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)
    }
    
    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y
    if (X_C + 1 == X_TC || Y_C == Y_TC) {
        X_TC = X_TC - RandInt_X
        Y_TC = Y_TC - RandInt_Y
    }
    
    targetStopp_v2()
    display.clear()
    display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
    display.show()
    // IF target over laps with player
    if (X_C == X_TC && Y_C == Y_TC) {
        Win()
    } else {
        basic.pause(150)
        X_C += 1
        if (X_C > 7) {
            X_C = 0
        }
        
        display.clear()
        display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
        display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
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
let RandInt_X = 0
let RandInt_Y = 0
let Rand_top = 1
let Rand_bottom = -1
let Level = 1
// Changes cordinates if there the same on start
if (X_C == X_TC && Y_C == Y_TC) {
    Y_C = randint(0, 7)
    X_C = randint(0, 7)
    Y_TC = randint(0, 7)
    X_TC = randint(0, 7)
}

display.setMatrixColor(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.Green))
display.setMatrixColor(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.Red))
display.show()
