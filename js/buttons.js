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


    // Play button
    const button = document.createElement("button");
    button.className = "play-btn";
    button.type = "button";
    button.textContent = "Play";

    button.addEventListener("click", () => {
        openAnimation(animation.name);
    });


    // Download button
    const downloadButton = document.createElement("button");
    downloadButton.className = "download-btn";
    downloadButton.type = "button";
    downloadButton.textContent = "Download";

    downloadButton.addEventListener("click", () => {
        downloadAnimation(animation.name);
    });


    item.appendChild(info);
    item.appendChild(button);
    item.appendChild(downloadButton);

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


/* =========================
   OPEN ANIMATION
========================= */

async function openAnimation(name) {
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


    if (typeof unlockAudio === "function") {
        await unlockAudio();
    }


    if (typeof startAnimationAudio === "function") {
        startAnimationAudio(name);
    }
}


/* =========================
   CLOSE ANIMATION
========================= */

function closeAnimation() {

    if (typeof stopAnimationAudio === "function") {
        stopAnimationAudio();
    }

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


/* =========================
   DOWNLOAD ANIMATION
========================= */

async function downloadAnimation(name) {
    const animation = getAnimation(name);

    if (!animation) {
        console.error(`Animation "${name}" not found.`);
        return;
    }

    try {

        // Load this animation's CSS
        const response = await fetch(`css/${name}.css`);

        if (!response.ok) {
            throw new Error(
                `Could not load CSS: css/${name}.css`
            );
        }

        const css = await response.text();

        // Generate the animation HTML
        const animationHTML = animation.render();

        // Create standalone HTML
        const html = `<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>${animation.title}</title>

    <style>

        html,
        body {
            margin: 0;
            width: 100%;
            height: 100%;
            background: #050509;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .animation-download-stage {
            width: 100vw;
            height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;
        }

${css}

    </style>

</head>

<body>

    <div class="animation-download-stage">

        ${animationHTML}

    </div>

</body>

</html>`;


        // Turn HTML into a downloadable file
        const blob = new Blob(
            [html],
            { type: "text/html" }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = `${name}.html`;

        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(url);

    } catch (error) {

        console.error(
            `Failed to download "${name}":`,
            error
        );

    }
}
