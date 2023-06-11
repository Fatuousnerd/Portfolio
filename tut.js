var contain = document.querySelector(".contain");


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