const sketchPad = document.querySelector('.sketchPad');
const gridSize = document.querySelector('.menu button:nth-child(2)');

function generateGrid(num) {
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