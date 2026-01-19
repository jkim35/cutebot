def Turn(Degrees: number):
    pass
basic.show_leds("""
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    """)
cuteBot.motors(50, 49)

def on_forever():
    cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffffff)
basic.forever(on_forever)
