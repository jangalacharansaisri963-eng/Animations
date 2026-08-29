registerAnimation("orbit", {
    title: "Quantum Orbit",
    subtitle: "Advanced Particle & Energy Simulation",

    render() {
        return `
            <div class="anim-orbit">

                <!-- ================================================= -->
                <!-- BACKGROUND SPACE -->
                <!-- ================================================= -->

                <div class="orbit-space"></div>

                <div class="orbit-nebula nebula-1"></div>
                <div class="orbit-nebula nebula-2"></div>
                <div class="orbit-nebula nebula-3"></div>

                <!-- ================================================= -->
                <!-- STAR FIELD -->
                <!-- ================================================= -->

                <div class="orbit-stars">

                    ${Array.from({ length: 32 }, (_, i) =>
                        `<span class="star star-${i + 1}"></span>`
                    ).join("")}

                </div>

                <!-- ================================================= -->
                <!-- DISTANT ENERGY PARTICLES -->
                <!-- ================================================= -->

                <div class="orbit-background-particles">

                    ${Array.from({ length: 18 }, (_, i) =>
                        `<span class="background-particle background-particle-${i + 1}"></span>`
                    ).join("")}

                </div>

                <!-- ================================================= -->
                <!-- OUTER QUANTUM FIELD -->
                <!-- ================================================= -->

                <div class="quantum-field quantum-field-1"></div>
                <div class="quantum-field quantum-field-2"></div>
                <div class="quantum-field quantum-field-3"></div>
                <div class="quantum-field quantum-field-4"></div>

                <!-- ================================================= -->
                <!-- MAIN ORBITAL SYSTEM -->
                <!-- ================================================= -->

                <div class="orbit-system">

                    <!-- Outer orbital -->
                    <div class="orbit-ring orbit-ring-outer">

                        <div class="electron electron-1"></div>
                        <div class="electron electron-2"></div>
                        <div class="electron electron-3"></div>
                        <div class="electron electron-4"></div>

                    </div>

                    <!-- Large tilted orbital -->
                    <div class="orbit-ring orbit-ring-1">

                        <div class="electron electron-5"></div>
                        <div class="electron electron-6"></div>
                        <div class="electron electron-7"></div>

                        <div class="energy-trail trail-1"></div>

                    </div>

                    <!-- Second tilted orbital -->
                    <div class="orbit-ring orbit-ring-2">

                        <div class="electron electron-8"></div>
                        <div class="electron electron-9"></div>
                        <div class="electron electron-10"></div>

                        <div class="energy-trail trail-2"></div>

                    </div>

                    <!-- Third orbital -->
                    <div class="orbit-ring orbit-ring-3">

                        <div class="electron electron-11"></div>
                        <div class="electron electron-12"></div>
                        <div class="electron electron-13"></div>

                        <div class="energy-trail trail-3"></div>

                    </div>

                    <!-- Vertical orbital -->
                    <div class="orbit-ring orbit-ring-vertical">

                        <div class="electron electron-14"></div>
                        <div class="electron electron-15"></div>

                    </div>

                    <!-- ================================================= -->
                    <!-- QUANTUM LATTICE -->
                    <!-- ================================================= -->

                    <div class="quantum-lattice">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                    <!-- ================================================= -->
                    <!-- CENTRAL REACTOR -->
                    <!-- ================================================= -->

                    <div class="orbit-core">

                        <div class="core-aura"></div>

                        <div class="core-ring core-ring-1"></div>
                        <div class="core-ring core-ring-2"></div>
                        <div class="core-ring core-ring-3"></div>

                        <div class="core-plasma">

                            <div class="plasma-layer plasma-layer-1"></div>
                            <div class="plasma-layer plasma-layer-2"></div>
                            <div class="plasma-layer plasma-layer-3"></div>

                            <div class="core-light"></div>

                        </div>

                    </div>

                </div>

                <!-- ================================================= -->
                <!-- HIGH-SPEED ENERGY ARCS -->
                <!-- ================================================= -->

                <div class="energy-arc energy-arc-1"></div>
                <div class="energy-arc energy-arc-2"></div>
                <div class="energy-arc energy-arc-3"></div>
                <div class="energy-arc energy-arc-4"></div>
                <div class="energy-arc energy-arc-5"></div>
                <div class="energy-arc energy-arc-6"></div>

                <!-- ================================================= -->
                <!-- PARTICLE STREAMS -->
                <!-- ================================================= -->

                <div class="particle-stream stream-1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="particle-stream stream-2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="particle-stream stream-3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- ================================================= -->
                <!-- QUANTUM FLARES -->
                <!-- ================================================= -->

                <div class="quantum-flare flare-1"></div>
                <div class="quantum-flare flare-2"></div>
                <div class="quantum-flare flare-3"></div>
                <div class="quantum-flare flare-4"></div>

                <!-- ================================================= -->
                <!-- FINAL AMBIENT GLOW -->
                <!-- ================================================= -->

                <div class="orbit-ambient-glow"></div>

            </div>
        `;
    }
});
