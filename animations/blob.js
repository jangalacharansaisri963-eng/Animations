registerAnimation("blob", {
    title: "Fluid Morph",
    subtitle: "Advanced Organic Energy Simulation",

    render() {
        return `
            <div class="anim-blob-wrapper">

                <!-- Deep-space atmosphere -->
                <div class="blob-background">
                    <div class="blob-bg-glow glow-1"></div>
                    <div class="blob-bg-glow glow-2"></div>
                    <div class="blob-bg-glow glow-3"></div>
                </div>

                <!-- Massive ambient aura -->
                <div class="blob-aura aura-1"></div>
                <div class="blob-aura aura-2"></div>
                <div class="blob-aura aura-3"></div>

                <!-- Particle field -->
                <div class="blob-particles particles-back">
                    ${Array.from({ length: 24 }, (_, i) =>
                        `<span class="particle particle-${i + 1}"></span>`
                    ).join("")}
                </div>

                <div class="blob-particles particles-mid">
                    ${Array.from({ length: 18 }, (_, i) =>
                        `<span class="particle particle-mid-${i + 1}"></span>`
                    ).join("")}
                </div>

                <div class="blob-particles particles-front">
                    ${Array.from({ length: 12 }, (_, i) =>
                        `<span class="particle particle-front-${i + 1}"></span>`
                    ).join("")}
                </div>

                <!-- Orbital energy system -->
                <div class="blob-orbit orbit-outer">
                    <span class="orbit-particle p1"></span>
                    <span class="orbit-particle p2"></span>
                    <span class="orbit-particle p3"></span>
                    <span class="orbit-particle p4"></span>
                </div>

                <div class="blob-orbit orbit-middle">
                    <span class="orbit-particle p1"></span>
                    <span class="orbit-particle p2"></span>
                    <span class="orbit-particle p3"></span>
                </div>

                <div class="blob-orbit orbit-inner">
                    <span class="orbit-particle p1"></span>
                    <span class="orbit-particle p2"></span>
                </div>

                <!-- Energy arcs -->
                <div class="blob-energy-arc arc-1"></div>
                <div class="blob-energy-arc arc-2"></div>
                <div class="blob-energy-arc arc-3"></div>
                <div class="blob-energy-arc arc-4"></div>

                <!-- Rotating rings -->
                <div class="blob-ring ring-outer"></div>
                <div class="blob-ring ring-middle"></div>
                <div class="blob-ring ring-inner"></div>

                <!-- Main fluid body -->
                <div class="blob-body">

                    <!-- Outer glow -->
                    <div class="blob-glow"></div>

                    <!-- Secondary fluid layer -->
                    <div class="blob-layer layer-back"></div>
                    <div class="blob-layer layer-mid"></div>

                    <!-- Actual blob -->
                    <div class="anim-blob">

                        <!-- Internal gradients -->
                        <div class="blob-gradient"></div>
                        <div class="blob-fluid fluid-a"></div>
                        <div class="blob-fluid fluid-b"></div>
                        <div class="blob-fluid fluid-c"></div>

                        <!-- Internal particles -->
                        <div class="blob-core-particles">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>

                        <!-- Glass/highlight layers -->
                        <div class="blob-highlight highlight-main"></div>
                        <div class="blob-highlight highlight-small"></div>
                        <div class="blob-reflection"></div>

                        <!-- Central energy core -->
                        <div class="blob-core">
                            <div class="core-glow"></div>
                            <div class="core-light"></div>
                        </div>

                    </div>
                </div>

                <!-- Shockwave system -->
                <div class="blob-shockwave shockwave-1"></div>
                <div class="blob-shockwave shockwave-2"></div>
                <div class="blob-shockwave shockwave-3"></div>

                <!-- Floating energy droplets -->
                <div class="blob-droplets">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- Lightning / energy filaments -->
                <div class="blob-filaments">
                    <div class="filament filament-1"></div>
                    <div class="filament filament-2"></div>
                    <div class="filament filament-3"></div>
                    <div class="filament filament-4"></div>
                    <div class="filament filament-5"></div>
                    <div class="filament filament-6"></div>
                </div>

                <!-- Final bloom -->
                <div class="blob-bloom"></div>

            </div>
        `;
    }
});
