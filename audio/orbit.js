registerAnimationAudio("orbit", () => {
    // Deep gravitational pulse
    playTone(82, 0.35, "sine", 0.045);

    // Electronic scan sweep
    setTimeout(() => {
        playTone(196, 0.10, "triangle", 0.025);
    }, 80);

    setTimeout(() => {
        playTone(293.66, 0.10, "triangle", 0.022);
    }, 150);

    setTimeout(() => {
        playTone(440, 0.12, "triangle", 0.020);
    }, 220);

    // Orbit-lock sparkle
    setTimeout(() => {
        playTone(880, 0.07, "sine", 0.018);
    }, 320);

    setTimeout(() => {
        playTone(1174.66, 0.10, "sine", 0.014);
    }, 390);

    // Final deep resonance
    setTimeout(() => {
        playTone(110, 0.45, "sine", 0.025);
    }, 470);
});
