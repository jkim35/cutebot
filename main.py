def Forward(num: number):
    cuteBot.motors(51.6, 50)
    basic.pause(55 * num)
    cuteBot.stopcar()
def TurnRight(Degrees: number):
    cuteBot.motors(50, 0)
    basic.pause(302 * (Degrees / 90))
    cuteBot.stopcar()
basic.show_leds("""
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    """)
Forward(25)

def on_forever():
    cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffffff)
basic.forever(on_forever)
