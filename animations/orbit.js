registerAnimation("orbit", {
    title: "Quantum Orbit",
    subtitle: "Orbital Particle Simulation",

    render() {
        return `
            <div class="anim-orbit">

                <div class="orbit-center"></div>

                <div class="orbit-ring">
                    <div class="orbit-dot"></div>
                </div>

                <div class="orbit-ring">
                    <div class="orbit-dot"></div>
                </div>

            </div>
        `;
    }
});
