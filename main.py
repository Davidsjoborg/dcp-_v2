def targetStopp():
    global X_C,Y_C, StepCount,X_TC,Y_TC
    if X_TC > 8:
        X_TC = 8
    if Y_TC > 8:
        Y_TC = 8
    if X_TC < 0:
        X_TC = 0
    if Y_TC < 0:
        Y_TC = 0
def Win():
    #IF target over laps with player
    display.clear()
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.PURPLE))
    display.show()
    basic.show_number(StepCount)

def UpButtonClick():
    global X_C, Y_C, X_TC, Y_TC , StepCount 
    GAME_ZIP64.run_motor(100)
    #led.unplot(X_C, Y_C)
    X_C -= 1
    StepCount += 1

    #IF target over laps with player
    if X_C == X_TC and Y_C == Y_TC:
        Win()
    else:
        #Makes you go to the other side
        if X_C < 0:
            X_C = 8
        
        #led.plot(X_C, Y_C)
        #led.unplot(X_TC, Y_TC)
        
        X_TC = X_TC + randint(-1, 1)
        Y_TC = Y_TC + randint(-1, 1)
        
        targetStopp()

        display.clear()
        display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
        display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
        display.show()

        #led.plot(X_TC, Y_TC)
        #IF target over laps with player
        if X_C == X_TC and Y_C == Y_TC:
            Win()


def DownButtonClick():
    GAME_ZIP64.run_motor(100)

def LeftButtonClick():
    GAME_ZIP64.run_motor(100)

def RightButtonClick():
    GAME_ZIP64.run_motor(100)

GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.UP,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    UpButtonClick)
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.DOWN,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    DownButtonClick)
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.LEFT,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    LeftButtonClick)
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.RIGHT,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    RightButtonClick)


display = GAME_ZIP64.create_zip64_display()
display.set_brightness(10)
display.clear()

# Setup the start Screen

StepCount = 0
X_C = 0
Y_C = 0
X_TC = randint(0, 8)
Y_TC = randint(0, 8)

#Changes cordinates if there the same on start
if X_C == X_TC and Y_C == Y_TC:
    Y_C = randint(0, 8)
    X_C = randint(0, 8)
    Y_TC = randint(0, 8)
    X_TC = randint(0, 8)

#display: GAME_ZIP64.ZIP64Display = None
#display = GAME_ZIP64.create_zip64_display()
#display.clear()
#display.set_brightness(10)

display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))

#display.show()

#display.show_color(GAME_ZIP64.colors(ZipLedColors.RED))
#display.set_pixel_color_at(0, GAME_ZIP64.colors(ZipLedColors.BLUE))
#display.set_matrix_color(2, 2, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.show()
GAME_ZIP64.run_motor(100)

