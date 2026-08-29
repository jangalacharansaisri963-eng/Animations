registerAnimationAudio("dna", () => {
    // Deep activation thump
    playTone(95, 0.28, "sine", 0.035);

    // Metallic molecular tick
    setTimeout(() => {
        playTone(1250, 0.045, "square", 0.012);
    }, 80);

    // Resonant scan
    setTimeout(() => {
        playTone(530, 0.35, "triangle", 0.018);
    }, 150);

    // Second scan layer
    setTimeout(() => {
        playTone(735, 0.28, "sine", 0.014);
    }, 230);

    // Tiny molecular clicks
    setTimeout(() => {
        playTone(1480, 0.035, "square", 0.009);
    }, 310);

    setTimeout(() => {
        playTone(1720, 0.035, "square", 0.007);
    }, 365);

    // Deep resonant finish
    setTimeout(() => {
        playTone(210, 0.5, "sine", 0.016);
    }, 430);
});
