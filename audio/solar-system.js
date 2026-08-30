registerAnimationAudio("solar-system", () => {
    // Bar 1 — opening space
    playTone(110, 0.8, "sine", 0.018);

    setTimeout(() => {
        playTone(164.81, 0.7, "sine", 0.012);
    }, 700);

    // Bar 2 — rising motion
    setTimeout(() => {
        playTone(146.83, 0.7, "sine", 0.014);
    }, 1400);

    setTimeout(() => {
        playTone(220, 0.8, "sine", 0.011);
    }, 2100);

    // Bar 3 — celestial melody
    setTimeout(() => {
        playTone(196, 0.7, "sine", 0.014);
    }, 2800);

    setTimeout(() => {
        playTone(246.94, 0.7, "sine", 0.012);
    }, 3500);

    setTimeout(() => {
        playTone(220, 0.8, "sine", 0.013);
    }, 4200);

    // Bar 4 — resolution
    setTimeout(() => {
        playTone(164.81, 0.8, "sine", 0.011);
    }, 4900);

    setTimeout(() => {
        playTone(110, 1.2, "sine", 0.016);
    }, 5600);

    // Small celestial sparkle
    setTimeout(() => {
        playTone(659.25, 0.12, "sine", 0.005);
    }, 3900);

    setTimeout(() => {
        playTone(783.99, 0.12, "sine", 0.004);
    }, 5250);
});
