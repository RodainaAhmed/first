input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showString("rody")
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showString("rovy")
    }
})
