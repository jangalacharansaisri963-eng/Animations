registerAnimationAudio("orbit", () => {
playTone(440, 0.12, "sine", 0.025);

setTimeout(() => {
    playTone(550, 0.15, "sine", 0.022);
}, 110);

setTimeout(() => {
    playTone(660, 0.18, "sine", 0.018);
}, 230);

});
