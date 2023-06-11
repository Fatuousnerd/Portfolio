var contain = document.querySelector(".contain"),
notifs = document.getElementById("notifs");


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

function closePopup() {
    notifs.style.display = 'none';
}

function loginrefer(){
    window.location.href = "signup.html"
}