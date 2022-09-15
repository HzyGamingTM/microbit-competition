// Not using classes [OOP] cuz they bad.
let Program = {
    detect_movement: () => {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            music.playTone(440, 100);
        } else basic.showIcon(IconNames.Angry)
    },
}

basic.forever(() => {
    Program.detect_movement();
})