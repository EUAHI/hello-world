input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("Wow!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.EigthNote)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G E C C E - G - ", 120)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Skull)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Heart)
