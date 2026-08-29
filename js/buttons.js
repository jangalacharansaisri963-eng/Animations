function createAnimationButton(animation) {
    const item = document.createElement("article");
    item.className = "app-item";

    const info = document.createElement("div");
    info.className = "app-info";

    const icon = document.createElement("div");
    icon.className = `app-icon icon-${animation.name}`;

    icon.textContent = getAnimationIcon(animation.name);

    const details = document.createElement("div");
    details.className = "app-details";

    const title = document.createElement("h3");
    title.textContent = animation.title;

    const subtitle = document.createElement("span");
    subtitle.textContent = animation.subtitle;

    details.appendChild(title);
    details.appendChild(subtitle);

    info.appendChild(icon);
    info.appendChild(details);

    const button = document.createElement("button");
    button.className = "play-btn";
    button.type = "button";
    button.textContent = "Play";

    button.addEventListener("click", () => {
        openAnimation(animation.name);
    });

    item.appendChild(info);
    item.appendChild(button);

    return item;
}


function getAnimationIcon(name) {
    const icons = {
        blob: "✦",
        spinner: "✧",
        pulse: "◉",
        orbit: "◎",
        dna: "🧬"
    };

    return icons[name] || "◆";
}


function renderAnimationStore() {
    const appList = document.getElementById("appList");

    if (!appList) {
        console.error("Animation list element not found.");
        return;
    }

    appList.innerHTML = "";

    const animations = getAllAnimations();

    for (const animation of animations) {
        const button = createAnimationButton(animation);
        appList.appendChild(button);
    }
}


function openAnimation(name) {
    const animation = getAnimation(name);

    if (!animation) {
        console.error(`Animation "${name}" not found.`);
        return;
    }

    const modal = document.getElementById("animationModal");
    const title = document.getElementById("modalTitle");
    const subtitle = document.getElementById("modalSubtitle");
    const stage = document.getElementById("stageContainer");

    if (!modal || !title || !subtitle || !stage) {
        console.error("Animation modal elements are missing.");
        return;
    }

    title.textContent = animation.title;
    subtitle.textContent = animation.subtitle;

    stage.innerHTML = animation.render();

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    if (typeof playAnimationSound === "function") {
        playAnimationSound(name);
    }
}


function closeAnimation() {
    const modal = document.getElementById("animationModal");
    const stage = document.getElementById("stageContainer");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    if (stage) {
        stage.innerHTML = "";
    }
}
