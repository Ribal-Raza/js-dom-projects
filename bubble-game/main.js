let time = 60;
let timerBox = document.querySelector("#timer");
let scoreBox = document.querySelector("#score");
let bubbleArea = document.querySelector(".bottomBar");
let score = 0;
let num = 0;
function makeBubble() {
  let amalgam = "";

  for (let i = 1; i <= 100; i++) {
    let number = Math.floor(Math.random() * 10 + 1);
    amalgam += `<div class="bubble">${number}</div>`;
  }

  bubbleArea.innerHTML = amalgam;
}

function timer() {
  let inetrval = setInterval(() => {
    if (time > 0) {
      timerBox.innerText = time;
      time = time - 1;
    } else {
      clearInterval(inetrval);
      bubbleArea.innerHTML = `<h2>Your Total Score</h2><div id="finalScore">${score}</div>`;
      time = 60;
      gameStart();
    }
  }, 1000);
}
function hitNumber() {
  let hit = document.querySelector("#hit");
  num = Math.floor(Math.random() * 10 + 1);
  hit.textContent = `${num}`;
}
function increaseScore() {
  bubbleArea.addEventListener("click", (details) => {
    const bubble = details.target;
    if (bubble.className === "bubble" && Number(bubble.innerText) === num) {
      score += 10;
      scoreBox.innerText = score;
      makeBubble();
      hitNumber();
    }
  });
}

function gameStart() {
  let btnstart = document.createElement("button");
  btnstart.setAttribute("class", "start-button");
  btnstart.innerText = "Start Game";
  bubbleArea.appendChild(btnstart);
  btnstart.addEventListener("click", () => {
    timer();
    makeBubble();
    hitNumber();
    increaseScore();
  });
}

gameStart();
