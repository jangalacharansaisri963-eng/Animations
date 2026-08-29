registerAnimation("dna", {
    title: "DNA Helix",
    subtitle: "Advanced Molecular Simulation",

    render() {
        const pairs = Array.from({ length: 24 }, (_, i) => {
            const angle = i * 15;
            const delay = -(i * 0.11);

            return `
                <div
                    class="dna-pair"
                    style="
                        --pair-index: ${i};
                        --pair-angle: ${angle}deg;
                        --pair-delay: ${delay}s;
                    "
                >
                    <div class="dna-nucleotide nucleotide-left">
                        <span class="nucleotide-core"></span>
                        <span class="nucleotide-glow"></span>
                    </div>

                    <div class="dna-base">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="dna-nucleotide nucleotide-right">
                        <span class="nucleotide-core"></span>
                        <span class="nucleotide-glow"></span>
                    </div>
                </div>
            `;
        }).join("");

        const molecules = Array.from({ length: 20 }, (_, i) => {
            const x = 5 + ((i * 37) % 90);
            const y = 5 + ((i * 61) % 90);
            const delay = -(i * 0.37).toFixed(2);
            const size = 2 + (i % 4);

            return `
                <span
                    class="dna-molecule"
                    style="
                        --x: ${x}%;
                        --y: ${y}%;
                        --size: ${size}px;
                        --molecule-delay: ${delay}s;
                    "
                ></span>
            `;
        }).join("");

        const energyArcs = Array.from({ length: 6 }, (_, i) => {
            return `
                <div
                    class="dna-energy-arc"
                    style="--arc-index:${i};"
                ></div>
            `;
        }).join("");

        return `
            <div class="dna-universe">

                <div class="dna-background-grid"></div>

                <div class="dna-aura dna-aura-outer"></div>
                <div class="dna-aura dna-aura-inner"></div>

                <div class="dna-energy-field">
                    ${energyArcs}
                </div>

                <div class="dna-molecules">
                    ${molecules}
                </div>

                <div class="dna-helix-container">

                    <div class="dna-helix-shadow"></div>

                    <div class="dna-backbone backbone-left"></div>
                    <div class="dna-backbone backbone-right"></div>

                    <div class="dna-pairs">
                        ${pairs}
                    </div>

                    <div class="dna-axis">
                        <span></span>
                    </div>

                </div>

                <div class="dna-scanner"></div>

                <div class="dna-label">
                    <span class="dna-status-dot"></span>
                    MOLECULAR SYSTEM
                </div>

            </div>
        `;
    }
});
