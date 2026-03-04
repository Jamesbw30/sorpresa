document.addEventListener("DOMContentLoaded", () => {

    const revealBtn = document.getElementById("revealBtn");
    const intro = document.getElementById("intro");
    const question = document.getElementById("question");
    const success = document.getElementById("success");

    const noBtn = document.querySelector(".no");
    const yesBtn = document.querySelector(".yes");

    // Mostrar pregunta
    revealBtn.addEventListener("click", () => {
        intro.classList.add("hidden");
        question.classList.remove("hidden");
    });

    // Botón "No" escapa
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.top = Math.random() * 80 + "%";
        noBtn.style.left = Math.random() * 80 + "%";
    });

    // Botón "Sí"
    yesBtn.addEventListener("click", () => {
        question.classList.add("hidden");
        success.classList.remove("hidden");
    });

});