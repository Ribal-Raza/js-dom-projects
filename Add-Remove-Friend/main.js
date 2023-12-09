let friendStatus = document.querySelector("h4");
let addFriend = document.getElementById("add");
let statusValue = 0;
let image = document.querySelector("img");

addFriend.addEventListener("click", () => {
  if (statusValue === 0) {
    friendStatus.innerText = "Friends";
    friendStatus.style.color = "cadetblue";
    addFriend.style.backgroundColor = "#dadada";
    addFriend.innerText = "Remove Friend";
    addFriend.style.color = "black";
    image.style.borderColor = "cadetblue";
    statusValue = 1;
  } else {
    friendStatus.innerText = "Not Friend";
    friendStatus.style.color = "red";
    addFriend.style.backgroundColor = "cornflowerblue";
    addFriend.innerText = "Add Friend";
    addFriend.style.color = "white";
    image.style.borderColor = "#455152";
    statusValue = 0;
  }
});
