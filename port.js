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

function shownot(){
    if(Notification.permission != "granted"){
        Notification.requestPermission()
    }
}

shownot()

