let theme = document.getElementsByClassName("toggle");
let circle = document.getElementsByClassName("circle");
theme.addEventListener('click', function() {
    circle.classList.add("move");
})