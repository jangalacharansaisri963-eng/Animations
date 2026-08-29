registerAnimationAudio("pulse", () => {
    // Deep reactor ignition
    playTone(55, 0.45, "sine", 0.055);

    // Rising power
    setTimeout(() => {
        playTone(82.41, 0.30, "triangle", 0.040);
    }, 90);

    setTimeout(() => {
        playTone(123.47, 0.25, "triangle", 0.035);
    }, 180);

    // Energy buildup
    setTimeout(() => {
        playTone(185, 0.18, "sawtooth", 0.018);
    }, 280);

    setTimeout(() => {
        playTone(277.18, 0.14, "square", 0.012);
    }, 360);

    // Reactor discharge
    setTimeout(() => {
        playTone(554.37, 0.06, "square", 0.025);
    }, 440);

    setTimeout(() => {
        playTone(830.61, 0.055, "triangle", 0.018);
    }, 475);

    // Deep energy impact
    setTimeout(() => {
        playTone(65.41, 0.55, "sine", 0.035);
    }, 520);
});
