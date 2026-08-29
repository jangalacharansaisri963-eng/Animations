registerAnimationAudio("blob", () => {
playTone(220, 0.15, "sine", 0.035);

setTimeout(() => {
    playTone(330, 0.2, "sine", 0.025);
}, 100);

setTimeout(() => {
    playTone(440, 0.18, "sine", 0.018);
}, 220);

});
