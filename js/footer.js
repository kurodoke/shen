const input__element = document.querySelector('.footer-input > input');
const SVGarrow__element = document.querySelector('.arrow > svg');

input__element.addEventListener('input', (e) => {
    if(e.target.value != ""){
        SVGarrow__element.style = "transform: translateY(0%)";
    } else {
        SVGarrow__element.style = "transform: translateY(200%)";
    }
});