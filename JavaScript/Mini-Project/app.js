let highScore = localStorage.getItem("highScore") || 0;
let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
    if (!started) {
        started = true;
        let oldMsg = document.querySelector(".level-msg");
        if (oldMsg) oldMsg.remove();
        if (startBtn.innerText === "Play Again") {
            level = 0;
            gameSeq = [];
        }
        levelUp();
    }
});

function gameFLash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 250);
}

function levelUp() {
    userSeq = [];
    let oldMsg = document.querySelector(".level-msg");
    if (oldMsg) oldMsg.remove();
    level++;
    h2.innerText = `Level ${level}`;
    if (level > 1) startBtn.innerText = "Next Level";
    let randColor = btns[Math.floor(Math.random() * btns.length)];
    gameSeq.push(randColor);
    playSequence();
}

function playSequence() {
    let i = 0;
    let interval = setInterval(() => {
        let btn = document.querySelector("." + gameSeq[i]);
        gameFLash(btn);
        i++;
        if (i >= gameSeq.length) clearInterval(interval);
    }, 600);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            started = false;
            startBtn.innerText = "Next Level";
            let msg = document.createElement("div");
            msg.classList.add("level-msg");
            msg.innerText = `🎉 Level ${level} Complete!`;
            h2.appendChild(msg);
        }
    } else {
        if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore);
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Highest Score: ${highScore}`;
        startBtn.innerText = "Play Again";
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 150);
        reset();
    }
}

function btnPress() {
    let userColor = this.getAttribute("id");
    userFlash(this);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

document.querySelectorAll(".btn").forEach(btn => btn.addEventListener("click", btnPress));

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
    startBtn.innerText = "Start Game";
}
