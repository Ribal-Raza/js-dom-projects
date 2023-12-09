let elements = document.querySelectorAll(".element");

elements.forEach((element) => {
  let image = element.childNodes[3];
  console.log(image);
  element.addEventListener("mousemove", (details) => {
    image.style.left = details.x + "px";
    image.style.top = details.y + "px";
  });
  element.addEventListener("mouseenter", (details) => {
    image.style.opacity = 1;
  });
  element.addEventListener("mouseleave", (details) => {
    image.style.opacity = 0;
  });
});
