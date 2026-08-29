const AnimationRegistry = {};

function registerAnimation(name, animation) {
    if (!name || !animation) {
        console.error("Invalid animation registration.");
        return;
    }

    if (AnimationRegistry[name]) {
        console.warn(`Animation "${name}" is already registered.`);
        return;
    }

    AnimationRegistry[name] = {
        name,
        title: animation.title || name,
        subtitle: animation.subtitle || "Animation",
        render: animation.render
    };
}

function getAnimation(name) {
    return AnimationRegistry[name] || null;
}

function getAllAnimations() {
    return Object.values(AnimationRegistry);
}
