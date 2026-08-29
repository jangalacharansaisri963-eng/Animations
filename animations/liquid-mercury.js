registerAnimation("liquid-mercury", {
    title: "Liquid Mercury",
    subtitle: "Reactive Metallic Fluid",

    render() {
        return `
            <div class="anim-liquid-mercury">

                <div class="mercury-space"></div>

                <div class="mercury-atmosphere">
                    <div class="atmosphere-glow"></div>
                    <div class="atmosphere-glow atmosphere-glow-2"></div>
                    <div class="atmosphere-glow atmosphere-glow-3"></div>
                </div>

                <div class="mercury-energy-field">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="mercury-shadow"></div>

                <div class="mercury-container">

                    <div class="mercury-aura"></div>
                    <div class="mercury-aura aura-2"></div>
                    <div class="mercury-aura aura-3"></div>

                    <div class="mercury-pool">

                        <div class="mercury-body">

                            <div class="mercury-surface">

                                <div class="surface-highlight highlight-1"></div>
                                <div class="surface-highlight highlight-2"></div>
                                <div class="surface-highlight highlight-3"></div>
                                <div class="surface-highlight highlight-4"></div>

                                <div class="surface-wave wave-1"></div>
                                <div class="surface-wave wave-2"></div>
                                <div class="surface-wave wave-3"></div>

                            </div>

                            <div class="mercury-liquid-layer layer-1"></div>
                            <div class="mercury-liquid-layer layer-2"></div>
                            <div class="mercury-liquid-layer layer-3"></div>

                            <div class="mercury-ripple ripple-1"></div>
                            <div class="mercury-ripple ripple-2"></div>
                            <div class="mercury-ripple ripple-3"></div>
                            <div class="mercury-ripple ripple-4"></div>
                            <div class="mercury-ripple ripple-5"></div>

                            <div class="mercury-reflection reflection-1"></div>
                            <div class="mercury-reflection reflection-2"></div>
                            <div class="mercury-reflection reflection-3"></div>
                            <div class="mercury-reflection reflection-4"></div>

                            <div class="mercury-chrome chrome-1"></div>
                            <div class="mercury-chrome chrome-2"></div>
                            <div class="mercury-chrome chrome-3"></div>

                        </div>

                        <div class="mercury-bubble bubble-1"></div>
                        <div class="mercury-bubble bubble-2"></div>
                        <div class="mercury-bubble bubble-3"></div>
                        <div class="mercury-bubble bubble-4"></div>
                        <div class="mercury-bubble bubble-5"></div>

                        <div class="mercury-wave-ring ring-1"></div>
                        <div class="mercury-wave-ring ring-2"></div>
                        <div class="mercury-wave-ring ring-3"></div>

                    </div>

                    <div class="mercury-droplets">

                        <span class="mercury-drop drop-1"></span>
                        <span class="mercury-drop drop-2"></span>
                        <span class="mercury-drop drop-3"></span>
                        <span class="mercury-drop drop-4"></span>
                        <span class="mercury-drop drop-5"></span>
                        <span class="mercury-drop drop-6"></span>
                        <span class="mercury-drop drop-7"></span>
                        <span class="mercury-drop drop-8"></span>
                        <span class="mercury-drop drop-9"></span>
                        <span class="mercury-drop drop-10"></span>
                        <span class="mercury-drop drop-11"></span>
                        <span class="mercury-drop drop-12"></span>

                    </div>

                    <div class="mercury-tendrils">

                        <div class="tendril tendril-1"></div>
                        <div class="tendril tendril-2"></div>
                        <div class="tendril tendril-3"></div>
                        <div class="tendril tendril-4"></div>
                        <div class="tendril tendril-5"></div>
                        <div class="tendril tendril-6"></div>

                    </div>

                    <div class="mercury-orbits">

                        <div class="mercury-orbit orbit-1">
                            <span></span>
                        </div>

                        <div class="mercury-orbit orbit-2">
                            <span></span>
                        </div>

                        <div class="mercury-orbit orbit-3">
                            <span></span>
                        </div>

                    </div>

                    <div class="mercury-particles">
                        ${"<b></b>".repeat(30)}
                    </div>

                    <div class="mercury-sparkles">
                        ${"<i></i>".repeat(24)}
                    </div>

                    <div class="mercury-surface-dust">
                        ${"<span></span>".repeat(18)}
                    </div>

                    <div class="mercury-energy-arcs">

                        <div class="energy-arc arc-1"></div>
                        <div class="energy-arc arc-2"></div>
                        <div class="energy-arc arc-3"></div>
                        <div class="energy-arc arc-4"></div>

                    </div>

                </div>

                <div class="mercury-distortion">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="mercury-vignette"></div>

                <div class="mercury-scanlines"></div>

            </div>
        `;
    }
});
