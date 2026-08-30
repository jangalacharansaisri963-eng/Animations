registerAnimation("aurora-borealis", {
    title: "Aurora Borealis",
    subtitle: "Northern Lights",

    render() {
        const stars = Array.from({ length: 140 }, (_, i) =>
            `<span class="aurora-star aurora-star-${i + 1}"></span>`
        ).join("");

        const starTwinkles = Array.from({ length: 45 }, (_, i) =>
            `<span class="aurora-twinkle aurora-twinkle-${i + 1}"></span>`
        ).join("");

        const particles = Array.from({ length: 75 }, (_, i) =>
            `<span class="aurora-particle aurora-particle-${i + 1}"></span>`
        ).join("");

        const dust = Array.from({ length: 55 }, (_, i) =>
            `<span class="aurora-dust aurora-dust-${i + 1}"></span>`
        ).join("");

        const waves = Array.from({ length: 12 }, (_, i) =>
            `<div class="aurora-wave aurora-wave-${i + 1}"></div>`
        ).join("");

        const curtains = Array.from({ length: 9 }, (_, i) =>
            `<div class="aurora-curtain aurora-curtain-${i + 1}"></div>`
        ).join("");

        const rays = Array.from({ length: 18 }, (_, i) =>
            `<span class="aurora-ray aurora-ray-${i + 1}"></span>`
        ).join("");

        const glows = Array.from({ length: 8 }, (_, i) =>
            `<span class="aurora-glow aurora-glow-${i + 1}"></span>`
        ).join("");

        const mist = Array.from({ length: 8 }, (_, i) =>
            `<span class="aurora-mist-layer aurora-mist-${i + 1}"></span>`
        ).join("");

        const mountains = Array.from({ length: 7 }, (_, i) =>
            `<div class="aurora-mountain aurora-mountain-${i + 1}"></div>`
        ).join("");

        const trees = Array.from({ length: 24 }, (_, i) =>
            `<span class="aurora-tree aurora-tree-${i + 1}"></span>`
        ).join("");

        const reflectionWaves = Array.from({ length: 14 }, (_, i) =>
            `<span class="reflection-wave reflection-wave-${i + 1}"></span>`
        ).join("");

        const waterParticles = Array.from({ length: 50 }, (_, i) =>
            `<span class="water-particle water-particle-${i + 1}"></span>`
        ).join("");

        const snowParticles = Array.from({ length: 35 }, (_, i) =>
            `<span class="snow-particle snow-particle-${i + 1}"></span>`
        ).join("");

        const shootingStars = Array.from({ length: 5 }, (_, i) =>
            `<span class="aurora-shooting-star aurora-shooting-star-${i + 1}"></span>`
        ).join("");

        const constellations = Array.from({ length: 4 }, (_, i) =>
            `<div class="aurora-constellation aurora-constellation-${i + 1}"></div>`
        ).join("");

        return `
            <div class="anim-aurora-borealis-wrapper">

                <div class="anim-aurora">

                    <!-- Sky -->
                    <div class="aurora-sky">

                        <!-- Atmospheric gradient -->
                        <div class="aurora-sky-gradient"></div>

                        <!-- Deep space -->
                        <div class="aurora-deep-space"></div>

                        <!-- Stars -->
                        <div class="aurora-star-field">
                            ${stars}
                        </div>

                        <!-- Twinkling stars -->
                        <div class="aurora-twinkle-field">
                            ${starTwinkles}
                        </div>

                        <!-- Constellations -->
                        <div class="aurora-constellations">
                            ${constellations}
                        </div>

                        <!-- Shooting stars -->
                        <div class="aurora-shooting-stars">
                            ${shootingStars}
                        </div>

                        <!-- Moon -->
                        <div class="aurora-moon">

                            <div class="moon-halo"></div>
                            <div class="moon-glow"></div>

                            <div class="moon-disc">
                                <span class="moon-crater moon-crater-1"></span>
                                <span class="moon-crater moon-crater-2"></span>
                                <span class="moon-crater moon-crater-3"></span>
                                <span class="moon-crater moon-crater-4"></span>
                                <span class="moon-crater moon-crater-5"></span>
                                <span class="moon-crater moon-crater-6"></span>

                                <span class="moon-highlight"></span>
                                <span class="moon-shadow"></span>
                            </div>

                        </div>

                        <!-- Aurora rays -->
                        <div class="aurora-rays">
                            ${rays}
                        </div>

                        <!-- Aurora glow sources -->
                        <div class="aurora-glows">
                            ${glows}
                        </div>

                        <!-- Main aurora -->
                        <div class="aurora-curtain-system">

                            <!-- Large curtains -->
                            ${curtains}

                            <!-- Wave layers -->
                            <div class="aurora-wave-system">
                                ${waves}
                            </div>

                        </div>

                        <!-- Aurora particles -->
                        <div class="aurora-particle-field">
                            ${particles}
                        </div>

                        <!-- Aurora dust -->
                        <div class="aurora-dust-field">
                            ${dust}
                        </div>

                        <!-- Vertical light streams -->
                        <div class="aurora-light-streams">

                            <span class="light-stream stream-1"></span>
                            <span class="light-stream stream-2"></span>
                            <span class="light-stream stream-3"></span>
                            <span class="light-stream stream-4"></span>
                            <span class="light-stream stream-5"></span>
                            <span class="light-stream stream-6"></span>
                            <span class="light-stream stream-7"></span>
                            <span class="light-stream stream-8"></span>

                        </div>

                        <!-- Horizon -->
                        <div class="aurora-horizon">

                            <div class="horizon-glow"></div>
                            <div class="horizon-light"></div>

                        </div>

                        <!-- Atmospheric mist -->
                        <div class="aurora-mist-system">
                            ${mist}
                        </div>

                        <!-- Mountain range -->
                        <div class="aurora-landscape">

                            <div class="aurora-mountains">
                                ${mountains}
                            </div>

                            <!-- Mountain snow caps -->
                            <div class="mountain-snow-caps">

                                <span class="snow-cap snow-cap-1"></span>
                                <span class="snow-cap snow-cap-2"></span>
                                <span class="snow-cap snow-cap-3"></span>
                                <span class="snow-cap snow-cap-4"></span>
                                <span class="snow-cap snow-cap-5"></span>

                            </div>

                            <!-- Forest -->
                            <div class="aurora-forest">
                                ${trees}
                            </div>

                            <!-- Foreground trees -->
                            <div class="aurora-foreground-trees">

                                <span class="foreground-tree tree-1"></span>
                                <span class="foreground-tree tree-2"></span>
                                <span class="foreground-tree tree-3"></span>
                                <span class="foreground-tree tree-4"></span>
                                <span class="foreground-tree tree-5"></span>
                                <span class="foreground-tree tree-6"></span>

                            </div>

                            <!-- Ground -->
                            <div class="aurora-ground">

                                <div class="ground-snow"></div>

                                <div class="snow-ridge ridge-1"></div>
                                <div class="snow-ridge ridge-2"></div>
                                <div class="snow-ridge ridge-3"></div>

                            </div>

                        </div>

                        <!-- Lake -->
                        <div class="aurora-lake">

                            <div class="lake-surface"></div>

                            <div class="lake-glow"></div>

                            <!-- Aurora reflection -->
                            <div class="aurora-reflection">

                                <div class="reflection-curtains">
                                    <span class="reflection-curtain reflection-curtain-1"></span>
                                    <span class="reflection-curtain reflection-curtain-2"></span>
                                    <span class="reflection-curtain reflection-curtain-3"></span>
                                    <span class="reflection-curtain reflection-curtain-4"></span>
                                    <span class="reflection-curtain reflection-curtain-5"></span>
                                    <span class="reflection-curtain reflection-curtain-6"></span>
                                </div>

                                <!-- Reflection waves -->
                                <div class="reflection-wave-system">
                                    ${reflectionWaves}
                                </div>

                                <!-- Water particles -->
                                <div class="water-particle-field">
                                    ${waterParticles}
                                </div>

                            </div>

                            <!-- Water highlights -->
                            <div class="water-highlights">

                                <span class="water-highlight highlight-1"></span>
                                <span class="water-highlight highlight-2"></span>
                                <span class="water-highlight highlight-3"></span>
                                <span class="water-highlight highlight-4"></span>
                                <span class="water-highlight highlight-5"></span>
                                <span class="water-highlight highlight-6"></span>
                                <span class="water-highlight highlight-7"></span>
                                <span class="water-highlight highlight-8"></span>

                            </div>

                        </div>

                        <!-- Snowfall -->
                        <div class="aurora-snowfall">
                            ${snowParticles}
                        </div>

                        <!-- Foreground atmospheric effects -->
                        <div class="aurora-foreground-effects">

                            <div class="foreground-glow glow-1"></div>
                            <div class="foreground-glow glow-2"></div>
                            <div class="foreground-glow glow-3"></div>

                            <div class="foreground-fog fog-1"></div>
                            <div class="foreground-fog fog-2"></div>

                        </div>

                        <!-- Vignette -->
                        <div class="aurora-vignette"></div>

                    </div>

                </div>

            </div>
        `;
    }
});
