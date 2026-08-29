registerAnimation("pulse", {
    title: "Neon Shockwave",
    subtitle: "Energy Pulse Simulation",

    render() {
        return `
            <div class="anim-pulse-wrapper">

                <div class="pulse-ring"></div>
                <div class="pulse-ring"></div>
                <div class="pulse-ring"></div>

                <div class="anim-pulse"></div>

            </div>
        `;
    }
});
