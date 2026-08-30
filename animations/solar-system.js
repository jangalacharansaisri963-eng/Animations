registerAnimation("solar-system", {
    title: "Solar System",
    subtitle: "Interactive Planetary System",

    render() {
        const asteroids = Array.from({ length: 42 }, (_, i) =>
            `<span class="asteroid asteroid-${i + 1}"></span>`
        ).join("");

        const asteroidDust = Array.from({ length: 28 }, (_, i) =>
            `<span class="asteroid-dust asteroid-dust-${i + 1}"></span>`
        ).join("");

        const saturnParticles = Array.from({ length: 24 }, (_, i) =>
            `<span class="saturn-particle saturn-particle-${i + 1}"></span>`
        ).join("");

        const kuiperObjects = Array.from({ length: 32 }, (_, i) =>
            `<span class="kuiper-object kuiper-object-${i + 1}"></span>`
        ).join("");

        const solarWind = Array.from({ length: 18 }, (_, i) =>
            `<span class="solar-wind-particle solar-wind-${i + 1}"></span>`
        ).join("");

        return `
            <div class="anim-solar-system-wrapper">
                <div class="anim-space">

                    <!-- Deep-space background -->
                    <div class="space-nebula nebula-1"></div>
                    <div class="space-nebula nebula-2"></div>
                    <div class="space-nebula nebula-3"></div>

                    <!-- Stars -->
                    <div class="space-stars stars-layer-1"></div>
                    <div class="space-stars stars-layer-2"></div>
                    <div class="space-stars stars-layer-3"></div>

                    <!-- Extra distant stars -->
                    <div class="star-field">
                        <span class="distant-star star-a"></span>
                        <span class="distant-star star-b"></span>
                        <span class="distant-star star-c"></span>
                        <span class="distant-star star-d"></span>
                        <span class="distant-star star-e"></span>
                        <span class="distant-star star-f"></span>
                        <span class="distant-star star-g"></span>
                        <span class="distant-star star-h"></span>
                        <span class="distant-star star-i"></span>
                        <span class="distant-star star-j"></span>
                        <span class="distant-star star-k"></span>
                        <span class="distant-star star-l"></span>
                    </div>

                    <!-- Shooting stars -->
                    <div class="shooting-star shooting-star-1"></div>
                    <div class="shooting-star shooting-star-2"></div>
                    <div class="shooting-star shooting-star-3"></div>

                    <div class="solar-system">

                        <!-- Solar wind -->
                        <div class="solar-wind">
                            ${solarWind}
                        </div>

                        <!-- Sun -->
                        <div class="solar-sun">

                            <div class="sun-corona corona-outer"></div>
                            <div class="sun-corona corona-middle"></div>
                            <div class="sun-corona corona-inner"></div>

                            <div class="sun-glow sun-glow-outer"></div>
                            <div class="sun-glow sun-glow-middle"></div>

                            <div class="sun-surface">

                                <div class="sun-texture"></div>

                                <!-- Sunspots -->
                                <span class="sunspot sunspot-1"></span>
                                <span class="sunspot sunspot-2"></span>
                                <span class="sunspot sunspot-3"></span>
                                <span class="sunspot sunspot-4"></span>
                                <span class="sunspot sunspot-5"></span>

                                <!-- Solar flares -->
                                <div class="sun-flare flare-1"></div>
                                <div class="sun-flare flare-2"></div>
                                <div class="sun-flare flare-3"></div>
                                <div class="sun-flare flare-4"></div>
                                <div class="sun-flare flare-5"></div>
                                <div class="sun-flare flare-6"></div>

                                <!-- Plasma arcs -->
                                <div class="solar-arc arc-1"></div>
                                <div class="solar-arc arc-2"></div>
                                <div class="solar-arc arc-3"></div>

                            </div>
                        </div>

                        <!-- Mercury -->
                        <div class="solar-orbit orbit-mercury">
                            <div class="solar-planet planet-mercury">

                                <span class="planet-highlight"></span>

                                <span class="planet-crater crater-1"></span>
                                <span class="planet-crater crater-2"></span>
                                <span class="planet-crater crater-3"></span>
                                <span class="planet-crater crater-4"></span>

                                <span class="planet-shadow"></span>

                            </div>
                        </div>

                        <!-- Venus -->
                        <div class="solar-orbit orbit-venus">
                            <div class="solar-planet planet-venus">

                                <span class="planet-clouds venus-clouds"></span>

                                <span class="venus-cloud venus-cloud-1"></span>
                                <span class="venus-cloud venus-cloud-2"></span>
                                <span class="venus-cloud venus-cloud-3"></span>

                                <span class="planet-shadow"></span>

                            </div>
                        </div>

                        <!-- Earth -->
                        <div class="solar-orbit orbit-earth">
                            <div class="solar-planet planet-earth">

                                <span class="earth-ocean"></span>
                                <span class="earth-land"></span>
                                <span class="earth-clouds"></span>
                                <span class="earth-night"></span>
                                <span class="earth-atmosphere"></span>

                                <!-- Earth lights -->
                                <span class="earth-city-lights"></span>

                                <!-- Moon -->
                                <div class="moon-orbit">

                                    <div class="moon-glow"></div>

                                    <div class="moon">
                                        <span class="moon-craters"></span>
                                        <span class="moon-highlight"></span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <!-- Mars -->
                        <div class="solar-orbit orbit-mars">
                            <div class="solar-planet planet-mars">

                                <span class="mars-surface"></span>

                                <span class="mars-crater mars-crater-1"></span>
                                <span class="mars-crater mars-crater-2"></span>
                                <span class="mars-crater mars-crater-3"></span>

                                <span class="mars-ice"></span>
                                <span class="mars-atmosphere"></span>

                            </div>
                        </div>

                        <!-- Asteroid belt -->
                        <div class="asteroid-belt">
                            ${asteroids}
                            ${asteroidDust}
                        </div>

                        <!-- Jupiter -->
                        <div class="solar-orbit orbit-jupiter">
                            <div class="solar-planet planet-jupiter">

                                <span class="jupiter-bands"></span>

                                <span class="jupiter-storm"></span>
                                <span class="jupiter-storm jupiter-storm-2"></span>
                                <span class="jupiter-storm jupiter-storm-3"></span>

                                <span class="jupiter-lightning lightning-1"></span>
                                <span class="jupiter-lightning lightning-2"></span>

                                <!-- Io -->
                                <div class="jupiter-moon moon-io">
                                    <span class="moon-surface"></span>
                                </div>

                                <!-- Europa -->
                                <div class="jupiter-moon moon-europa">
                                    <span class="moon-surface"></span>
                                </div>

                                <!-- Ganymede -->
                                <div class="jupiter-moon moon-ganymede">
                                    <span class="moon-surface"></span>
                                </div>

                                <!-- Callisto -->
                                <div class="jupiter-moon moon-callisto">
                                    <span class="moon-surface"></span>
                                </div>

                            </div>
                        </div>

                        <!-- Saturn -->
                        <div class="solar-orbit orbit-saturn">
                            <div class="saturn-system">

                                <div class="saturn-rings">

                                    <span class="saturn-ring ring-outer"></span>
                                    <span class="saturn-ring ring-middle"></span>
                                    <span class="saturn-ring ring-inner"></span>
                                    <span class="saturn-ring ring-gap"></span>

                                    <div class="saturn-ring-particles">
                                        ${saturnParticles}
                                    </div>

                                </div>

                                <div class="solar-planet planet-saturn">
                                    <span class="saturn-bands"></span>
                                    <span class="saturn-shadow"></span>
                                </div>

                                <!-- Saturn moons -->
                                <div class="saturn-moon saturn-moon-1"></div>
                                <div class="saturn-moon saturn-moon-2"></div>
                                <div class="saturn-moon saturn-moon-3"></div>

                            </div>
                        </div>

                        <!-- Uranus -->
                        <div class="solar-orbit orbit-uranus">
                            <div class="uranus-system">

                                <div class="uranus-rings">
                                    <span class="uranus-ring"></span>
                                    <span class="uranus-ring uranus-ring-2"></span>
                                    <span class="uranus-ring uranus-ring-3"></span>
                                </div>

                                <div class="solar-planet planet-uranus">
                                    <span class="uranus-atmosphere"></span>
                                    <span class="uranus-clouds"></span>
                                    <span class="planet-shadow"></span>
                                </div>

                            </div>
                        </div>

                        <!-- Neptune -->
                        <div class="solar-orbit orbit-neptune">
                            <div class="solar-planet planet-neptune">

                                <span class="neptune-clouds"></span>

                                <span class="neptune-storm"></span>
                                <span class="neptune-storm neptune-storm-2"></span>

                                <span class="neptune-atmosphere"></span>

                            </div>
                        </div>

                        <!-- Kuiper Belt -->
                        <div class="kuiper-belt">
                            ${kuiperObjects}
                        </div>

                        <!-- Distant dwarf planet -->
                        <div class="dwarf-planet-orbit">

                            <div class="dwarf-planet">
                                <span class="dwarf-surface"></span>
                                <span class="dwarf-highlight"></span>
                            </div>

                        </div>

                        <!-- Additional distant objects -->
                        <div class="distant-object-orbit distant-orbit-1">
                            <span class="distant-object"></span>
                        </div>

                        <div class="distant-object-orbit distant-orbit-2">
                            <span class="distant-object"></span>
                        </div>

                        <!-- Comets -->
                        <div class="comet comet-1">
                            <span class="comet-glow"></span>
                            <span class="comet-head"></span>
                            <span class="comet-tail"></span>
                            <span class="comet-dust"></span>
                        </div>

                        <div class="comet comet-2">
                            <span class="comet-glow"></span>
                            <span class="comet-head"></span>
                            <span class="comet-tail"></span>
                            <span class="comet-dust"></span>
                        </div>

                        <div class="comet comet-3">
                            <span class="comet-glow"></span>
                            <span class="comet-head"></span>
                            <span class="comet-tail"></span>
                            <span class="comet-dust"></span>
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
