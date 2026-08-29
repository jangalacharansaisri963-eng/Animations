document.addEventListener("DOMContentLoaded", () => {

    renderAnimationStore();

    const closeButton = document.getElementById("closeModalBtn");
    const stopButton = document.getElementById("stopModalBtn");
    const modal = document.getElementById("animationModal");

    if (closeButton) {
        closeButton.addEventListener("click", closeAnimation);
    }

    if (stopButton) {
        stopButton.addEventListener("click", closeAnimation);
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeAnimation();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAnimation();
        }
    });

    console.log(
        `Animation Store loaded: ${getAllAnimations().length} animations`
    );
});
