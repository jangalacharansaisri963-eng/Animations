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

    return audioContext;
}

async function unlockAudio() {
    const ctx = getAudioContext();

    if (!ctx) {
        return null;
    }

    if (ctx.state === "suspended") {
        try {
            await ctx.resume();
        } catch (err) {
            console.warn("Could not resume audio:", err);
        }
    }

    return ctx;
}

function playTone(
    frequency = 440,
    duration = 0.15,
    type = "sine",
    volume = 0.04
) {
    const ctx = getAudioContext();

    if (!ctx || ctx.state !== "running") {
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

async function playAnimationSound(name) {
    const playFn = AnimationAudioRegistry[name];

    if (typeof playFn !== "function") {
        console.warn(
            `No audio registered for animation "${name}".`
        );
        return;
    }

    await unlockAudio();

    try {
        playFn();
    } catch (err) {
        console.warn(
            `Failed to play sound for "${name}":`,
            err
        );
    }
}
