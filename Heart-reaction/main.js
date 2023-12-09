let container = document.querySelector(".container");
let heart = document.querySelector("svg");

container.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(() => {
    heart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1500);
  setTimeout(() => {
    heart.style.opacity = "0";
  }, 1000);
});
