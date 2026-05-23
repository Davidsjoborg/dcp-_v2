GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function UpButtonClick() {
    
    GAME_ZIP64.runMotor(100)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function DownButtonClick() {
    GAME_ZIP64.runMotor(100)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function LeftButtonClick() {
    GAME_ZIP64.runMotor(100)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function RightButtonClick() {
    GAME_ZIP64.runMotor(100)
})
let display = GAME_ZIP64.createZIP64Display()
display.setBrightness(10)
display.clear()
//  Setup the start Screen
let StepCount = 0
let X_C = 0
let Y_C = 0
let X_TC = randint(0, 8)
let Y_TC = randint(0, 8)
// Changes cordinates if there the same on start
if (X_C == X_TC && Y_C == Y_TC) {
    Y_C = randint(0, 8)
    X_C = randint(0, 8)
    Y_TC = randint(0, 8)
    X_TC = randint(0, 8)
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
GAME_ZIP64.runMotor(100)
