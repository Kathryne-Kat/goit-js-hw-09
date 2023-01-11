const refs = {
    startBtn:document.querySelector('[data-start]'),
    stopBtn:document.querySelector('[data-stop]'),
    bodyStyle:document.querySelector('body'),
}
let timer = null;

refs.startBtn.addEventListener("click", () => {
    refs.startBtn.setAttribute('disabled','')
    timer = setInterval(() => {    
        refs.bodyStyle.style.backgroundColor = getRandomHexColor();    
    }, 1000);
});


refs.stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    refs.startBtn.removeAttribute('disabled')
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}