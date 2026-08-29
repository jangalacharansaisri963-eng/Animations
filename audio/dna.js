registerAnimationAudio("dna", () => {
playTone(300, 0.12, "sine", 0.025);

setTimeout(() => {
    playTone(450, 0.12, "sine", 0.025);
}, 100);

setTimeout(() => {
    playTone(600, 0.15, "sine", 0.02);
}, 200);

setTimeout(() => {
    playTone(750, 0.18, "triangle", 0.015);
}, 320);

});
