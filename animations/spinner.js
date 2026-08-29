registerAnimation("spinner", {
    title: "Holographic Spinner",
    subtitle: "Physics Toy Simulation",

    render() {
        return `
            <div class="anim-spinner-wrapper">
                <div class="anim-spinner-glow"></div>

                <div class="anim-spinner">

                    <div class="spinner-arm">
                        <div class="spinner-orb"></div>
                    </div>

                    <div class="spinner-arm">
                        <div class="spinner-orb"></div>
                    </div>

                    <div class="spinner-arm">
                        <div class="spinner-orb"></div>
                    </div>

                    <div class="spinner-core"></div>

                </div>
            </div>
        `;
    }
});
