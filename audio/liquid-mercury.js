registerAnimationAudio("liquid-mercury", () => {
    playTone(92, 0.22, "sine", 0.035);

    setTimeout(() => {
        playTone(138, 0.16, "triangle", 0.025);
    }, 120);

    setTimeout(() => {
        playTone(207, 0.12, "sine", 0.018);
    }, 230);

    setTimeout(() => {
        playTone(311, 0.09, "square", 0.012);
    }, 310);

    setTimeout(() => {
        playTone(466, 0.14, "triangle", 0.015);
    }, 390);

    setTimeout(() => {
        playTone(233, 0.28, "sine", 0.018);
    }, 510);
});
