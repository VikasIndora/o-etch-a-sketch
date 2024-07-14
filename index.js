const sketchPad = document.querySelector('.sketchPad');
const gridSize = document.querySelector('.menu button:nth-child(2)');
const clearGrid = document.querySelector('.menu button:nth-child(3)');
const deleteGrid = document.querySelector('.menu button:nth-child(4)');


function generateGrid(num) {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
    for (let i = 1; i <= num * num; i++) {
        const childDiv = document.createElement('div')
        childDiv.style.cssText = `width: ${479.5 / num}px; height: ${479.5 / num}px; outline: 1px solid #36454F;`
        childDiv.addEventListener('mouseenter', () => {
            childDiv.className = 'childDivColor';
        })
        sketchPad.appendChild(childDiv)
    }
}

gridSize.addEventListener('click', () => {
    let num = +prompt(`Enter grid dimension`);
    generateGrid(num);
})

clearGrid.addEventListener('click', () => {

})

deleteGrid.addEventListener('click', () => {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
})