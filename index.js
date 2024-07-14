const sketchPad = document.querySelector('.sketchPad');

for(let i = 1; i <=64; i++){
const childDiv = document.createElement('div')
childDiv.style.cssText = "width: 50px; height: 50px; outline: 1px solid black;"
sketchPad.appendChild(childDiv)
}