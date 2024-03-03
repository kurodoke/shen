const list__element = document.querySelector('.sneakers-list');

// add listener for mouse wheel so the content can being scroll horizontaly 
list__element.addEventListener("wheel", function(event) {
    event.preventDefault();
    this.style.scrollBehavior = "smooth";
    this.scrollLeft += event.deltaY * 10;
})