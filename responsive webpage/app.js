const btn = document.getElementById("btn")
const notification = document.querySelector(".share-popup");

btn.addEventListener('click', () => {
    notification.classList.toggle("hide-popup");
})