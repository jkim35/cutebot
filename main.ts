function Forward (num: number) {
    cuteBot.motors(47, 50)
    basic.pause(55 * num)
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
Forward(25)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
})
