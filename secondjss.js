let firstsec = document.querySelector('#firstSection');
let navbar = document.querySelector("#navbar");
navbarHeight = navbar.offsetHeight;


window.addEventListener("scroll", function () {
    let scrolly = window.scrollY;
    // console.log(scrollY + " Scroll Y")
    // console.log(firstsec.offsetTop + " offset Top")
    // console.log(firstsec.offsetHeight + " offset Height")
    // console.log(navbarHeight);
    if (scrolly > (firstsec.offsetTop - (navbarHeight / 2))) {
        navbar.classList.add("invert");
    }
})
window.addEventListener("scroll", function () {
    let scrolly = window.scrollY;
    if (scrolly < (firstsec.offsetTop - (navbarHeight / 2))) {
        navbar.classList.remove("invert");
    }
})
