def UpButtonClick():
    GAME_ZIP64.run_motor(100)

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
display.show_color(GAME_ZIP64.colors(ZipLedColors.RED))
display.set_pixel_color_at(0, GAME_ZIP64.colors(ZipLedColors.BLUE))
display.set_matrix_color(2, 2, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.show()
GAME_ZIP64.run_motor(100)

