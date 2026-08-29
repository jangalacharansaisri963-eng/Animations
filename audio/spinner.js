registerAnimationAudio("spinner", () => {
playTone(520, 0.08, "triangle", 0.03);

setTimeout(() => {
    playTone(780, 0.08, "triangle", 0.025);
}, 90);

setTimeout(() => {
    playTone(1040, 0.12, "sine", 0.018);
}, 180);

});
