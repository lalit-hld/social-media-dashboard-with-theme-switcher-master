let toggleBtn = document.querySelector(".toggleBtn");
let circle = document.querySelector(".circle");

toggleBtn.addEventListener('click', function(event) {
    event.stopPropagation();

    toggleBtn.classList.toggle("active");
    body.classList.toggle("dark");

    let bodyHasDarkTheme = body.classList.contains("dark");

    let themeToSave = bodyHasDarkTheme ? "dark" : "light";

    localStorage.setItem("theme", themeToSave);
})


document.addEventListener('DOMContentLoaded', function() {
    let savedTheme = localStorage.getItem("theme");

    body.classList.add(savedTheme);
    let bodyHasDarkTheme = body.classList.contains("dark");

    if (bodyHasDarkTheme) {
        toggleBtn.classList.add("active");
    }

});