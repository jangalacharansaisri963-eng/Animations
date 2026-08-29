registerAnimation("spinner", {
    title: "Prismatic Holographic Spinner",
    subtitle: "Rainbow Energy Rotor",

    render() {
        return `
            <div class="anim-spinner-wrapper">

                <!-- Atmospheric glow -->
                <div class="spinner-aura"></div>
                <div class="spinner-aura spinner-aura-2"></div>

                <!-- Holographic outer rings -->
                <div class="spinner-holo-ring holo-ring-1"></div>
                <div class="spinner-holo-ring holo-ring-2"></div>
                <div class="spinner-holo-ring holo-ring-3"></div>

                <!-- Main rotor -->
                <div class="anim-spinner">

                    <div class="spinner-arm arm-red">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-orange">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-yellow">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-green">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-cyan">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-blue">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <div class="spinner-arm arm-purple">
                        <div class="spinner-orb"></div>
                        <div class="spinner-trail"></div>
                    </div>

                    <!-- Central reactor -->
                    <div class="spinner-core">
                        <div class="spinner-core-glow"></div>
                        <div class="spinner-core-ring"></div>
                        <div class="spinner-core-inner"></div>
                        <div class="spinner-core-highlight"></div>
                    </div>

                </div>

                <!-- Orbiting particles -->
                <div class="spinner-particle particle-1"></div>
                <div class="spinner-particle particle-2"></div>
                <div class="spinner-particle particle-3"></div>
                <div class="spinner-particle particle-4"></div>
                <div class="spinner-particle particle-5"></div>
                <div class="spinner-particle particle-6"></div>
                <div class="spinner-particle particle-7"></div>
                <div class="spinner-particle particle-8"></div>
                <div class="spinner-particle particle-9"></div>
                <div class="spinner-particle particle-10"></div>
                <div class="spinner-particle particle-11"></div>
                <div class="spinner-particle particle-12"></div>

                <!-- Holographic scan -->
                <div class="spinner-scanline"></div>

            </div>
        `;
    }
});
