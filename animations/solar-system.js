registerAnimation("solar-system", {
    title: "Solar System",
    subtitle: "Interactive Planetary System",

    render() {
        return `
            <div class="anim-solar-system-wrapper">
                <div class="anim-space">

                    <div class="space-stars stars-layer-1"></div>
                    <div class="space-stars stars-layer-2"></div>
                    <div class="space-stars stars-layer-3"></div>

                    <div class="solar-system">

                        <div class="solar-sun">
                            <div class="sun-glow sun-glow-outer"></div>
                            <div class="sun-glow sun-glow-middle"></div>
                            <div class="sun-surface">
                                <div class="sun-flare flare-1"></div>
                                <div class="sun-flare flare-2"></div>
                                <div class="sun-flare flare-3"></div>
                                <div class="sun-flare flare-4"></div>
                            </div>
                        </div>

                        <!-- Mercury -->
                        <div class="solar-orbit orbit-mercury">
                            <div class="solar-planet planet-mercury">
                                <span class="planet-highlight"></span>
                            </div>
                        </div>

                        <!-- Venus -->
                        <div class="solar-orbit orbit-venus">
                            <div class="solar-planet planet-venus">
                                <span class="planet-clouds"></span>
                            </div>
                        </div>

                        <!-- Earth -->
                        <div class="solar-orbit orbit-earth">
                            <div class="solar-planet planet-earth">
                                <span class="earth-land"></span>
                                <span class="earth-clouds"></span>
                                <span class="earth-atmosphere"></span>

                                <div class="moon-orbit">
                                    <div class="moon">
                                        <span class="moon-craters"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mars -->
                        <div class="solar-orbit orbit-mars">
                            <div class="solar-planet planet-mars">
                                <span class="mars-surface"></span>
                                <span class="mars-ice"></span>
                            </div>
                        </div>

                        <!-- Asteroid Belt -->
                        <div class="asteroid-belt">
                            <span class="asteroid asteroid-1"></span>
                            <span class="asteroid asteroid-2"></span>
                            <span class="asteroid asteroid-3"></span>
                            <span class="asteroid asteroid-4"></span>
                            <span class="asteroid asteroid-5"></span>
                            <span class="asteroid asteroid-6"></span>
                            <span class="asteroid asteroid-7"></span>
                            <span class="asteroid asteroid-8"></span>
                            <span class="asteroid asteroid-9"></span>
                            <span class="asteroid asteroid-10"></span>
                            <span class="asteroid asteroid-11"></span>
                            <span class="asteroid asteroid-12"></span>
                        </div>

                        <!-- Jupiter -->
                        <div class="solar-orbit orbit-jupiter">
                            <div class="solar-planet planet-jupiter">
                                <span class="jupiter-bands"></span>
                                <span class="jupiter-storm"></span>

                                <div class="jupiter-moon moon-io"></div>
                                <div class="jupiter-moon moon-europa"></div>
                                <div class="jupiter-moon moon-ganymede"></div>
                            </div>
                        </div>

                        <!-- Saturn -->
                        <div class="solar-orbit orbit-saturn">
                            <div class="saturn-system">

                                <div class="saturn-rings">
                                    <span class="saturn-ring ring-outer"></span>
                                    <span class="saturn-ring ring-middle"></span>
                                    <span class="saturn-ring ring-inner"></span>
                                </div>

                                <div class="solar-planet planet-saturn">
                                    <span class="saturn-bands"></span>
                                </div>

                            </div>
                        </div>

                        <!-- Uranus -->
                        <div class="solar-orbit orbit-uranus">
                            <div class="uranus-system">

                                <div class="uranus-rings">
                                    <span class="uranus-ring"></span>
                                </div>

                                <div class="solar-planet planet-uranus">
                                    <span class="uranus-atmosphere"></span>
                                </div>

                            </div>
                        </div>

                        <!-- Neptune -->
                        <div class="solar-orbit orbit-neptune">
                            <div class="solar-planet planet-neptune">
                                <span class="neptune-clouds"></span>
                                <span class="neptune-storm"></span>
                            </div>
                        </div>

                        <!-- Distant dwarf planet -->
                        <div class="dwarf-planet-orbit">
                            <div class="dwarf-planet">
                                <span class="dwarf-surface"></span>
                            </div>
                        </div>

                        <!-- Comets -->
                        <div class="comet comet-1">
                            <span class="comet-head"></span>
                            <span class="comet-tail"></span>
                        </div>

                        <div class="comet comet-2">
                            <span class="comet-head"></span>
                            <span class="comet-tail"></span>
                        </div>

                        <!-- Orbital paths -->
                        <div class="orbit-path path-mercury"></div>
                        <div class="orbit-path path-venus"></div>
                        <div class="orbit-path path-earth"></div>
                        <div class="orbit-path path-mars"></div>
                        <div class="orbit-path path-jupiter"></div>
                        <div class="orbit-path path-saturn"></div>
                        <div class="orbit-path path-uranus"></div>
                        <div class="orbit-path path-neptune"></div>

                        <!-- Planet labels -->
                        <div class="planet-label label-mercury">Mercury</div>
                        <div class="planet-label label-venus">Venus</div>
                        <div class="planet-label label-earth">Earth</div>
                        <div class="planet-label label-mars">Mars</div>
                        <div class="planet-label label-jupiter">Jupiter</div>
                        <div class="planet-label label-saturn">Saturn</div>
                        <div class="planet-label label-uranus">Uranus</div>
                        <div class="planet-label label-neptune">Neptune</div>

                    </div>
                </div>
            </div>
        `;
    }
});
