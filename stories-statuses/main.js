let imagesArr = [
  {
    imageSrc: "./assets/story-1.jpg",
    story: "./assets/story-1.jpg",
  },
  {
    imageSrc: "./assets/story-2.jpg",
    story: "./assets/story-2.jpg",
  },
  {
    imageSrc: "./assets/story-3.jpg",
    story: "./assets/story-3.jpg",
  },
  {
    imageSrc: "./assets/story-4.jpg",
    story: "./assets/story-4.jpg",
  },
  {
    imageSrc: "./assets/story-5.jpg",
    story: "./assets/story-5.jpg",
  },
];
let clutter = "";
imagesArr.forEach((image, index) => {
  clutter += `<div class="story">
  <img id="${index}" src="${image.imageSrc}" alt="picture-of-story-${index}"/>
  </div>`;
});

const feed = document.querySelector(".feed");
feed.innerHTML = clutter;

feed.addEventListener("click", (details) => {
  console.log(imagesArr[details.target.id].story);
  const fullImage = document.querySelector(".full-image");
  fullImage.style.display = "block";
  fullImage.style.backgroundImage = `url(${
    imagesArr[details.target.id].story
  })`;
  setTimeout(() => {
    fullImage.style.display = "none";
  }, 5000);
});
const exitBtn = document.querySelector("button");
exitBtn.addEventListener("click", () => {
  const fullImage = document.querySelector(".full-image");
  fullImage.style.display = "none";
});
