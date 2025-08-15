"use strict";

const countBlock = document.getElementsByClassName("clicks-count")[0];
const buttons = document.querySelectorAll(".button");
const mainArea = document.getElementsByClassName("main-area")[0];
let activeBtn;

mainArea.addEventListener("click", function (e) {
    const target = e.target;
    if (target.className === "button") {
        activeBtn = target;
        renderButtons();
        renderCountBlock();
    }
});

function renderButtons() {
    activeBtn.innerHTML = "Нажата";
    buttons.forEach((btn) => {
        if (btn != activeBtn) btn.innerHTML = "Нажми меня";
    });
}

function renderCountBlock() {
    countBlock.innerText = String(Number(countBlock.innerText) + 1);
}
