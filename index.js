let body = document.querySelector(".color");
let rgb = document.querySelector(".rgb");

function changeColor() {
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
let color = `rgb(${r}, ${g}, ${b})`;
    body.style.background = color;
    rgb.textContent = color;
}
setInterval(changeColor, 1000)

// const randomColor = (Math.floor(Math.random() * 256 ))
//     body.style.color = "#" + randomColor ;
//     text.innerHTML = "#" + randomColor;
    