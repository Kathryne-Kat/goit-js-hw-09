const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyStyle= document.querySelector('body')
let timer = null;

startBtn.addEventListener("click", () => {
    startBtn.setAttribute('disabled','')
    timer = setInterval(() => {    
        bodyStyle.style.backgroundColor = getRandomHexColor();    
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    startBtn.removeAttribute('disabled')
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}