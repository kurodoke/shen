const nav__element = document.querySelector('nav');

window.addEventListener('scroll', (e)=> {
    if (window.scrollY >= 100){
        nav__element.style = "background-color: black";
    } else {
        nav__element.style = "background-color: transparent";
    }
})