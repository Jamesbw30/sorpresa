const revealBtn = document.getElementById("revealBtn");
const question = document.getElementById("question");
const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

revealBtn.addEventListener("click", () => {
    question.classList.remove("hidden");
    revealBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#ff4d6d;color:white;font-size:30px;text-align:center;">
            Sabía que dirías que sí 😍❤️
        </div>
    `;
});