// Not using classes [OOP] cuz they bad.
let Recycling = {
    WAIT_TIME: 4000000,
    MUSIC_TONE: 440,

    CLOSE_SPEED: 0,
    OPEN_SPEED: 180,

    IS_MOVEMENT: false,
    AMT_RECYCLED: 0,

    detect_movement: () => {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            basic.showIcon(IconNames.Happy);
            Recycling.open_bin();
            music.playTone(Recycling.MUSIC_TONE, 100);
        } else basic.showIcon(IconNames.Umbrella);
    }, open_bin: () => {
        console.log("opening bin!");
        pins.servoWritePin(AnalogPin.P1, Recycling.OPEN_SPEED)
        control.waitMicros(Recycling.WAIT_TIME);
        Recycling.close_bin();
    }, close_bin: () => {
        console.log("closing bin!");
        pins.servoWritePin(AnalogPin.P1, Recycling.CLOSE_SPEED);
    }
}

basic.forever(() => {
    Recycling.detect_movement();
})