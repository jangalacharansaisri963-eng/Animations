registerAnimationAudio("blob", () => {

    // Deep sub-bass impact
    playTone(110, 0.35, "sine", 0.045);

    // Initial fluid resonance
    setTimeout(() => {
        playTone(165, 0.25, "sine", 0.035);
    }, 80);

    // Rising harmonic
    setTimeout(() => {
        playTone(220, 0.3, "triangle", 0.03);
    }, 160);

    // Second harmonic
    setTimeout(() => {
        playTone(330, 0.28, "sine", 0.025);
    }, 260);

    // High shimmer
    setTimeout(() => {
        playTone(495, 0.22, "triangle", 0.018);
    }, 360);

    // Bright resonance
    setTimeout(() => {
        playTone(660, 0.18, "sine", 0.014);
    }, 450);

    // Tiny crystalline accent
    setTimeout(() => {
        playTone(880, 0.12, "sine", 0.01);
    }, 540);

    // Final low resonance
    setTimeout(() => {
        playTone(140, 0.45, "sine", 0.025);
    }, 650);

});
