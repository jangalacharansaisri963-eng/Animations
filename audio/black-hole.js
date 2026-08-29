registerAnimationAudio("black-hole", () => {
    // Deep gravitational rumble
    playTone(55, 0.65, "sine", 0.055);

    // Distant orbital resonance
    setTimeout(() => {
        playTone(82.41, 0.45, "triangle", 0.035);
    }, 120);

    // Matter accelerating inward
    setTimeout(() => {
        playTone(123.47, 0.32, "sawtooth", 0.018);
    }, 260);

    setTimeout(() => {
        playTone(98, 0.38, "sine", 0.025);
    }, 390);

    // Event-horizon hit
    setTimeout(() => {
        playTone(41.20, 0.75, "sine", 0.065);
    }, 520);

    // Photon-ring resonance
    setTimeout(() => {
        playTone(164.81, 0.22, "triangle", 0.018);
    }, 690);

    setTimeout(() => {
        playTone(146.83, 0.28, "triangle", 0.015);
    }, 790);

    // Final gravitational collapse
    setTimeout(() => {
        playTone(36.71, 0.9, "sine", 0.07);
    }, 930);
});
