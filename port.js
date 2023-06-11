var home = document.getElementById("home"),
scroller = document.getElementById("scroller"),
contain = document.querySelector(".contain")
tables = document.getElementById("tables");

tables.addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
});

window.addEventListener('load', () => {
    contain.style.display = 'none'
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

/*function shownot(){
    if(Notification.permission != "granted"){
        Notification.requestPermission()
    }
}

shownot()*/

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