registerAnimationAudio("pulse", () => {
playTone(110, 0.3, "sine", 0.05);

setTimeout(() => {
    playTone(165, 0.25, "sine", 0.035);
}, 100);

setTimeout(() => {
    playTone(220, 0.2, "sine", 0.02);
}, 220);

});
