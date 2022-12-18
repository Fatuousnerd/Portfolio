var home = document.getElementById("home"),
hire = document.getElementById("hire"),
services = document.getElementById("services"),
about = document.getElementById("about"),
port = document.getElementById("port"),
contain = document.querySelector(".contain"),
abouts = document.querySelector(".about"),
scroller = document.getElementById("scroller"),
anim = document.getElementById("anim"),
tables = document.getElementById("tables"),
light = document.getElementById("light"),
dark = document.getElementById("dark");

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

window.addEventListener('scroll', () => {
    //
    if(window.screenTop = "1000px"){
        scroller.style.display = "block"
    } else{
        scroller.style.display = "none"
    }
    scroller.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
});
 
dark.onclick = () => {
    while (dark.innerHTML == "dark_mode") {
        dark.innerHTML == "light_mode"
    }
    
};

