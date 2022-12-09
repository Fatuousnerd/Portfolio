var home = document.getElementById("home"),
hire = document.getElementById("hire"),
services = document.getElementById("services"),
about = document.getElementById("about"),
port = document.getElementById("port"),
contain = document.querySelector(".contain"),
abouts = document.querySelector(".about")

window.addEventListener('load', () => {
    contain.style.display = 'none'
});

about.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
});

services.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 2 + 100,
        behavior: 'smooth'
      });
});

hire.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 3,
        behavior: 'smooth'
      });
});

home.addEventListener('click', () => {
    window.scrollBy({
        top: 0,
        behavior: 'smooth'
      });
});
