registerAnimationAudio("spinner", () => {
    // Rapid holographic ignition
    playTone(196, 0.10, "triangle", 0.025);

    setTimeout(() => {
        playTone(293.66, 0.10, "triangle", 0.022);
    }, 70);

    setTimeout(() => {
        playTone(392, 0.10, "triangle", 0.020);
    }, 140);

    // Spinning energy layer
    setTimeout(() => {
        playTone(523.25, 0.07, "sine", 0.018);
    }, 210);

    setTimeout(() => {
        playTone(659.25, 0.07, "sine", 0.016);
    }, 270);

    setTimeout(() => {
        playTone(783.99, 0.08, "triangle", 0.014);
    }, 330);

    // Bright holographic shimmer
    setTimeout(() => {
        playTone(1046.5, 0.06, "sine", 0.012);
    }, 400);

    setTimeout(() => {
        playTone(1318.51, 0.09, "triangle", 0.010);
    }, 455);

    // Deep rotating-core hit
    setTimeout(() => {
        playTone(98, 0.30, "sine", 0.035);
    }, 500);
});
