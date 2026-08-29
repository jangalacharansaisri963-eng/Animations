let audioContext = null;
const AnimationAudioRegistry = {};

function getAudioContext() {
    if (!audioContext) {
        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            console.warn("Web Audio API is not supported.");
            return null;
        }

        audioContext = new AudioContext();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    return audioContext;
}

function playTone(
    frequency = 440,
    duration = 0.15,
    type = "sine",
    volume = 0.04
) {
    const ctx = getAudioContext();

    if (!ctx) {
        return;
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(
        frequency,
        ctx.currentTime
    );

    gain.gain.setValueAtTime(
        volume,
        ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(
        ctx.currentTime + duration
    );
}

function registerAnimationAudio(name, playFn) {
    if (!name || typeof playFn !== "function") {
        console.error("Invalid animation audio registration.");
        return;
    }

    AnimationAudioRegistry[name] = playFn;
}

function playAnimationSound(name) {
    const playFn = AnimationAudioRegistry[name];

    if (typeof playFn === "function") {
        try {
            playFn();
        } catch (err) {
            console.warn(`Failed to play sound for "${name}":`, err);
        }
    }
}
