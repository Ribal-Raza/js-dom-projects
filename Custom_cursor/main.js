let container = document.querySelector("#container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", (mouseEvent) => {
  cursor.style.left = mouseEvent.x + "px";
  cursor.style.top = mouseEvent.y + "px";
});
