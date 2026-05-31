#Version 5 OK
def targetStopp_v2():
    global X_C,Y_C, StepCount,X_TC,Y_TC,Level
    if Level > 2:
        if X_TC > 7:
            X_TC = 0
        if Y_TC > 7:
            Y_TC = 0
        if X_TC < 0:
            X_TC = 7
        if Y_TC < 0:
            Y_TC = 7
    else:
        targetStopp()

def targetStopp():
    global X_C,Y_C, StepCount,X_TC,Y_TC
    if X_TC > 7:
        X_TC = 7
    if Y_TC > 7:
        Y_TC = 7
    if X_TC < 0:
        X_TC = 0
    if Y_TC < 0:
        Y_TC = 0
def Win():
    global X_C, Y_C, X_TC, Y_TC , StepCount,RandInt_X,RandInt_Y,Rand_top,Rand_bottom,Level
    #IF target over laps with player
    display.clear()
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.YELLOW))
    display.show()
    
    basic.show_number(StepCount)
    basic.pause(2000)

    X_C = randint(0, 7)    
    Y_C = randint(0, 7)
    X_TC = randint(0, 7)
    Y_TC = randint(0, 7)

    display.clear()
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
    display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()
    
    Level += 1
    basic.show_number(Level)

    Rand_top += 1
    Rand_bottom -= 1

    if Rand_top > 2:
        Rand_top = 2
        Rand_bottom = -2

def UpButtonClick():
    global X_C, Y_C, X_TC, Y_TC , StepCount,RandInt_X,RandInt_Y,Rand_top,Rand_bottom
    GAME_ZIP64.run_motor(50)
    StepCount += 1

    #IF target over laps with player
    #if X_C == X_TC and Y_C == Y_TC:
        #Win()
    #else:
    
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)

    #Makes movement number randome again
    if RandInt_X == 0 and RandInt_Y == 0:
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)

    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y

    #if X_C != X_TC or Y_C -1 != Y_TC:
        #X_TC = X_TC - RandInt_X
        #Y_TC = Y_TC - RandInt_Y
    
    targetStopp_v2()

    display.clear()
    display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
    display.show()        

    #IF target over laps with player
    if X_C == X_TC and Y_C == Y_TC:
        Win()
    else:
        basic.pause(150)

        Y_C -= 1
        if Y_C < 0:
            Y_C = 7
        
        display.clear()
        display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
        display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
        display.show()

        #IF target over laps with player
        if X_C == X_TC and Y_C == Y_TC:
            Win()

def DownButtonClick():
    global X_C, Y_C, X_TC, Y_TC , StepCount,RandInt_X,RandInt_Y,Rand_top,Rand_bottom
    GAME_ZIP64.run_motor(50)
    StepCount += 1

    #IF target over laps with player
    #if X_C == X_TC and Y_C == Y_TC:
        #Win()
    #else:
    
    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)

    #Makes movement number randome again
    if RandInt_X == 0 and RandInt_Y == 0:
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)

    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y

    #if X_C != X_TC or Y_C +1 != Y_TC:
        #X_TC = X_TC - RandInt_X
        #Y_TC = Y_TC - RandInt_Y
    
    targetStopp_v2()

    display.clear()
    display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
    display.show()

    #IF target over laps with player
    if X_C == X_TC and Y_C == Y_TC:
        Win()
    else:
        basic.pause(150)

        Y_C += 1
        if Y_C > 7:
            Y_C = 0
        
        display.clear()
        display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
        display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
        display.show()

        #IF target over laps with player
        if X_C == X_TC and Y_C == Y_TC:
            Win()

def LeftButtonClick():
    global X_C, Y_C, X_TC, Y_TC , StepCount,RandInt_X,RandInt_Y,Rand_top,Rand_bottom
    GAME_ZIP64.run_motor(50)
    StepCount += 1

    #IF target over laps with player
    #if X_C == X_TC and Y_C == Y_TC:
        #Win()
    #else:

    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)

    #Makes movement number randome again
    if RandInt_X == 0 and RandInt_Y == 0:
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)

    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y

    #if X_C -1 != X_TC or Y_C != Y_TC:
        #X_TC = X_TC - RandInt_X
        #Y_TC = Y_TC - RandInt_Y
    
    targetStopp_v2()

    display.clear()
    display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
    display.show()

    #IF target over laps with player
    if X_C == X_TC and Y_C == Y_TC:
        Win()
    else:
        basic.pause(150)

        X_C -= 1
        if X_C < 0:
            X_C = 7
        
        display.clear()
        display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
        display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
        display.show()

        #IF target over laps with player
        if X_C == X_TC and Y_C == Y_TC:
            Win()

def RightButtonClick():
    global X_C, Y_C, X_TC, Y_TC , StepCount,RandInt_X,RandInt_Y,Rand_top,Rand_bottom
    #basic.show_string("R")
    #basic.pause(2000)
    GAME_ZIP64.run_motor(50)
    #led.unplot(X_C, Y_C)
    #X_C += 1
    StepCount += 1

    #IF target over laps with player
    #if X_C == X_TC and Y_C == Y_TC:
        #Win()
    #else:

    RandInt_X = randint(Rand_bottom, Rand_top)
    RandInt_Y = randint(Rand_bottom, Rand_top)

    #Makes movement number randome again
    if RandInt_X == 0 and RandInt_Y == 0:
        RandInt_X = randint(Rand_bottom, Rand_top)
        RandInt_Y = randint(Rand_bottom, Rand_top)

    X_TC = X_TC + RandInt_X
    Y_TC = Y_TC + RandInt_Y

    #if X_C +1 != X_TC or Y_C != Y_TC:
        #X_TC = X_TC - RandInt_X
        #Y_TC = Y_TC - RandInt_Y

    targetStopp_v2()

    display.clear()
    display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
    display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
    display.show()

    #IF target over laps with player
    if X_C == X_TC and Y_C == Y_TC:
        Win()
    else:
        basic.pause(150)

        X_C += 1
        if X_C > 7:
            X_C = 0
        
        display.clear()
        display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))
        display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
        display.show()

        #IF target over laps with player
        if X_C == X_TC and Y_C == Y_TC:
            Win()

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
X_C = randint(0, 7)
Y_C = randint(0, 7)
X_TC = randint(0, 7)
Y_TC = randint(0, 7)
RandInt_X = 0
RandInt_Y = 0
Rand_top = 1
Rand_bottom = -1
Level = 0

#Changes cordinates if there the same on start
if X_C == X_TC and Y_C == Y_TC:
    Y_C = randint(0, 7)
    X_C = randint(0, 7)
    Y_TC = randint(0, 7)
    X_TC = randint(0, 7)

display.set_matrix_color(X_C, Y_C, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.set_matrix_color(X_TC, Y_TC, GAME_ZIP64.colors(ZipLedColors.RED))

display.show()
#GAME_ZIP64.run_motor(100)

