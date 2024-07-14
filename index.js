const sketchPad = document.querySelector('.sketchPad');

let num = +prompt(`Enter grid dimension`);

function generateGrid(num) {
    for (let i = 1; i <= num*num; i++) {
        const childDiv = document.createElement('div')
        childDiv.style.cssText = `width: ${479.5/num}px; height: ${479.5/num}px; outline: 1px solid #36454F;`
        sketchPad.appendChild(childDiv)
    }
}

generateGrid(num);