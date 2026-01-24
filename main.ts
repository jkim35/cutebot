function Forward (num: number) {
    cuteBot.motors(51.6, 50)
    basic.pause(21.2 * num)
    cuteBot.stopcar()
}
function WaterForward (num: number) {
    cuteBot.motors(51.6, 50)
    basic.pause(25 * num)
    cuteBot.stopcar()
}
function TurnRightWater (Degrees: number) {
    cuteBot.motors(50, 0)
    basic.pause(1125 * (Degrees / 45))
    cuteBot.stopcar()
}
function TurnRight (Degrees: number) {
    cuteBot.motors(50, 0)
    basic.pause(302 * (Degrees / 90))
    cuteBot.stopcar()
}
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
WaterForward(25)
basic.pause(500)
TurnRightWater(90)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
})
