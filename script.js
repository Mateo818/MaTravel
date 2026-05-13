let slajdovi = document.querySelectorAll(".slajd");
let i = 0;

function showSlide(){
    slajdovi.forEach(slide => {
        slide.classList.remove("active");
    });
    slajdovi[i].classList.add("active");
    i++;
    if(i >= slajdovi.length){
        i = 0;
    }
}
setInterval(showSlide, 4000);

let elements = document.querySelectorAll(".skriveno");

function checkElements(){
    let windowHeight = window.innerHeight;

    elements.forEach(e => {

        let elementTop = e.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            e.classList.add("pokazi");
        }

        else{
            e.classList.remove("pokazi");
        }

    });
}
window.addEventListener("scroll", checkElements);
window.addEventListener("load", checkElements);






let e = document.querySelectorAll(".skriveno2");

function provjeri(){
    let w = window.innerHeight;

    e.forEach(e => {

        let et = e.getBoundingClientRect().top;

        if(et < w - 100){
            e.classList.add("pokazi");
        }

        else{
            e.classList.remove("pokazi");
        }

    });
}
window.addEventListener("scroll", provjeri);
window.addEventListener("load", provjeri);
