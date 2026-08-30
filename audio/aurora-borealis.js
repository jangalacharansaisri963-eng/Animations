registerAnimationAudio("aurora-borealis", () => {
    // Deep polar ambience
    playTone(55, 2.8, "sine", 0.09);

    // Low harmonic foundation
    setTimeout(() => {
        playTone(73.42, 2.4, "sine", 0.075);
    }, 350);

    // Aurora slowly begins to rise
    setTimeout(() => {
        playTone(110, 2.0, "triangle", 0.065);
    }, 700);

    // First luminous harmonic
    setTimeout(() => {
        playTone(146.83, 1.8, "triangle", 0.06);
    }, 1050);

    // Green curtain sweeps upward
    setTimeout(() => {
        playTone(196, 1.5, "sine", 0.055);
    }, 1380);

    // Upper aurora shimmer
    setTimeout(() => {
        playTone(246.94, 1.25, "triangle", 0.05);
    }, 1650);

    // Second harmonic connects to the previous tone
    setTimeout(() => {
        playTone(293.66, 1.15, "triangle", 0.045);
    }, 1880);

    // Aurora reaches its brightest point
    setTimeout(() => {
        playTone(392, 1.0, "sine", 0.042);
    }, 2100);

    // Soft descending resonance
    setTimeout(() => {
        playTone(329.63, 1.2, "triangle", 0.045);
    }, 2350);

    setTimeout(() => {
        playTone(246.94, 1.45, "sine", 0.05);
    }, 2600);

    // Returning harmonic
    setTimeout(() => {
        playTone(196, 1.7, "triangle", 0.055);
    }, 2920);

    // Deep atmospheric resolution
    setTimeout(() => {
        playTone(146.83, 2.0, "sine", 0.065);
    }, 3250);

    setTimeout(() => {
        playTone(110, 2.4, "sine", 0.07);
    }, 3600);

    // Final low resonance
    setTimeout(() => {
        playTone(73.42, 2.8, "sine", 0.08);
    }, 3950);
});
