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
display.showColor(GAME_ZIP64.colors(ZipLedColors.Red))
display.setPixelColorAt(0, GAME_ZIP64.colors(ZipLedColors.Blue))
display.setMatrixColor(2, 2, GAME_ZIP64.colors(ZipLedColors.Green))
display.show()
GAME_ZIP64.runMotor(100)
