const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyStyle:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.setAttribute("disabled",""),e=setInterval((()=>{t.bodyStyle.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.e8655b12.js.map