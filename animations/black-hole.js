registerAnimation("black-hole", {
    title: "Black Hole Warp",
    subtitle: "Gravitational Singularity",

    render() {
        return `
            <div class="anim-black-hole">

                <div class="black-hole-space"></div>

                <!-- Background star field -->
                <div class="black-hole-stars stars-far">
                    ${"<i></i>".repeat(45)}
                </div>

                <div class="black-hole-stars stars-mid">
                    ${"<i></i>".repeat(32)}
                </div>

                <div class="black-hole-stars stars-near">
                    ${"<i></i>".repeat(20)}
                </div>

                <!-- Nebula clouds -->
                <div class="black-hole-nebula">
                    <div class="nebula-cloud nebula-1"></div>
                    <div class="nebula-cloud nebula-2"></div>
                    <div class="nebula-cloud nebula-3"></div>
                    <div class="nebula-cloud nebula-4"></div>
                </div>

                <!-- Gravitational lens -->
                <div class="black-hole-lens">

                    <div class="lens-distortion"></div>

                    <div class="lens-ring lens-ring-outer"></div>
                    <div class="lens-ring lens-ring-middle"></div>
                    <div class="lens-ring lens-ring-inner"></div>

                    <div class="lens-highlight lens-highlight-1"></div>
                    <div class="lens-highlight lens-highlight-2"></div>

                </div>

                <!-- Relativistic jets -->
                <div class="black-hole-jets">

                    <div class="jet jet-top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="jet jet-bottom">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

                <!-- Main accretion disk -->
                <div class="black-hole-disk">

                    <div class="disk-layer disk-layer-outer"></div>
                    <div class="disk-layer disk-layer-wide"></div>
                    <div class="disk-layer disk-layer-hot"></div>
                    <div class="disk-layer disk-layer-inner"></div>

                    <div class="disk-band band-1"></div>
                    <div class="disk-band band-2"></div>
                    <div class="disk-band band-3"></div>
                    <div class="disk-band band-4"></div>
                    <div class="disk-band band-5"></div>

                    <div class="disk-hotspot hotspot-1"></div>
                    <div class="disk-hotspot hotspot-2"></div>
                    <div class="disk-hotspot hotspot-3"></div>
                    <div class="disk-hotspot hotspot-4"></div>
                    <div class="disk-hotspot hotspot-5"></div>
                    <div class="disk-hotspot hotspot-6"></div>

                </div>

                <!-- Infalling matter -->
                <div class="infalling-matter">

                    ${"<span></span>".repeat(36)}

                </div>

                <!-- Photon ring -->
                <div class="photon-rings">

                    <div class="photon-ring photon-ring-outer"></div>
                    <div class="photon-ring photon-ring-main"></div>
                    <div class="photon-ring photon-ring-inner"></div>

                </div>

                <!-- Event horizon -->
                <div class="black-hole-horizon">

                    <div class="horizon-aura"></div>
                    <div class="horizon-glow"></div>

                    <div class="horizon">
                        <div class="horizon-core"></div>
                        <div class="horizon-reflection"></div>
                        <div class="horizon-shadow"></div>
                    </div>

                </div>

                <!-- Orbiting particles -->
                <div class="black-hole-particles">

                    ${"<span></span>".repeat(48)}

                </div>

                <!-- Gravitational arcs -->
                <div class="gravity-arcs">

                    <div class="gravity-arc arc-1"></div>
                    <div class="gravity-arc arc-2"></div>
                    <div class="gravity-arc arc-3"></div>
                    <div class="gravity-arc arc-4"></div>
                    <div class="gravity-arc arc-5"></div>
                    <div class="gravity-arc arc-6"></div>

                </div>

                <!-- Spacetime distortion waves -->
                <div class="spacetime-waves">

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

                <!-- Light bending streaks -->
                <div class="gravity-streaks">

                    ${"<div></div>".repeat(18)}

                </div>

                <!-- High-speed warp particles -->
                <div class="warp-particles">

                    ${"<b></b>".repeat(35)}

                </div>

                <!-- Foreground debris -->
                <div class="foreground-debris">

                    ${"<i></i>".repeat(24)}

                </div>

                <!-- Energy sparks -->
                <div class="energy-sparks">

                    ${"<span></span>".repeat(30)}

                </div>

                <!-- Final atmospheric layers -->
                <div class="black-hole-glow"></div>
                <div class="black-hole-vignette"></div>
                <div class="black-hole-scanlines"></div>

            </div>
        `;
    }
});
