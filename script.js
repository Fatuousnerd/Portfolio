var home = document.getElementById("home"),
hire = document.getElementById("hire"),
services = document.getElementById("services"),
about = document.getElementById("about"),
port = document.getElementById("port"),
contain = document.querySelector(".contain"),
abouts = document.querySelector(".about"),
scroller = document.getElementById("scroller"),
anim = document.getElementById("anim"),
theme = document.getElementById("theme"),
tables = document.getElementById("tables");

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

window.addEventListener('scroll', () => {
    //Back To Top Scroller
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

function edtheme(){
    console.warn(theme.innerHTML)
    if(theme.innerHTML = "light_mode"){
        theme.innerHTML = "dark_mode"
        console.error(theme.innerHTML)
    }
    if(theme.innerHTML == "light_mode"){
        theme.innerHTML = "mode_night"
        console.log(theme.innerHTML)
    }
}
 
//Get What You Want Animation
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
//Animation End