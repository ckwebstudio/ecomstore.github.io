navbar = document.querySelector(".navbar-toggle");
// navbackground = document.querySelector(".nav-background");
// menusection = document.querySelector(".menu-section");
burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
    navbar.classList.toggle("h-nav-res");

})

// slider

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("product-slides");
    let dots = document.getElementsByClassName("image-box");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "opacity-off";
}




console.log("wellcome no error");