registerAnimation("pulse", {
    title: "Neon Shockwave",
    subtitle: "Quantum Energy Reactor",

    render() {
        return `
            <div class="anim-pulse-wrapper">

                <!-- Atmospheric glow -->
                <div class="pulse-aura"></div>
                <div class="pulse-aura pulse-aura-2"></div>
                <div class="pulse-aura pulse-aura-3"></div>

                <!-- Expanding shockwaves -->
                <div class="pulse-shockwave shockwave-1"></div>
                <div class="pulse-shockwave shockwave-2"></div>
                <div class="pulse-shockwave shockwave-3"></div>
                <div class="pulse-shockwave shockwave-4"></div>

                <!-- Main reactor rings -->
                <div class="pulse-ring ring-outer"></div>
                <div class="pulse-ring ring-outer-2"></div>
                <div class="pulse-ring ring-mid"></div>
                <div class="pulse-ring ring-mid-2"></div>
                <div class="pulse-ring ring-inner"></div>

                <!-- Rotating energy arcs -->
                <div class="pulse-arc arc-1"></div>
                <div class="pulse-arc arc-2"></div>
                <div class="pulse-arc arc-3"></div>
                <div class="pulse-arc arc-4"></div>
                <div class="pulse-arc arc-5"></div>
                <div class="pulse-arc arc-6"></div>

                <!-- Reactor orbit -->
                <div class="pulse-orbit orbit-1">
                    <span></span>
                </div>

                <div class="pulse-orbit orbit-2">
                    <span></span>
                </div>

                <div class="pulse-orbit orbit-3">
                    <span></span>
                </div>

                <!-- Energy particles -->
                <div class="pulse-particle particle-1"></div>
                <div class="pulse-particle particle-2"></div>
                <div class="pulse-particle particle-3"></div>
                <div class="pulse-particle particle-4"></div>
                <div class="pulse-particle particle-5"></div>
                <div class="pulse-particle particle-6"></div>
                <div class="pulse-particle particle-7"></div>
                <div class="pulse-particle particle-8"></div>
                <div class="pulse-particle particle-9"></div>
                <div class="pulse-particle particle-10"></div>
                <div class="pulse-particle particle-11"></div>
                <div class="pulse-particle particle-12"></div>

                <!-- Flying sparks -->
                <div class="pulse-spark spark-1"></div>
                <div class="pulse-spark spark-2"></div>
                <div class="pulse-spark spark-3"></div>
                <div class="pulse-spark spark-4"></div>
                <div class="pulse-spark spark-5"></div>
                <div class="pulse-spark spark-6"></div>
                <div class="pulse-spark spark-7"></div>
                <div class="pulse-spark spark-8"></div>

                <!-- Energy rays -->
                <div class="pulse-ray ray-1"></div>
                <div class="pulse-ray ray-2"></div>
                <div class="pulse-ray ray-3"></div>
                <div class="pulse-ray ray-4"></div>
                <div class="pulse-ray ray-5"></div>
                <div class="pulse-ray ray-6"></div>
                <div class="pulse-ray ray-7"></div>
                <div class="pulse-ray ray-8"></div>

                <!-- Reactor core -->
                <div class="pulse-core">

                    <div class="core-outer"></div>

                    <div class="core-middle">
                        <div class="core-energy"></div>
                    </div>

                    <div class="core-inner"></div>

                    <div class="core-highlight"></div>

                    <div class="core-crosshair horizontal"></div>
                    <div class="core-crosshair vertical"></div>

                </div>

                <!-- Scanning layer -->
                <div class="pulse-scanner"></div>

                <!-- Vertical energy beam -->
                <div class="pulse-beam beam-top"></div>
                <div class="pulse-beam beam-bottom"></div>

                <!-- Tiny floating energy motes -->
                <div class="pulse-mote mote-1"></div>
                <div class="pulse-mote mote-2"></div>
                <div class="pulse-mote mote-3"></div>
                <div class="pulse-mote mote-4"></div>
                <div class="pulse-mote mote-5"></div>
                <div class="pulse-mote mote-6"></div>
                <div class="pulse-mote mote-7"></div>
                <div class="pulse-mote mote-8"></div>
                <div class="pulse-mote mote-9"></div>
                <div class="pulse-mote mote-10"></div>

            </div>
        `;
    }
});
