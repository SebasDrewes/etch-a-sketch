const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const customGrid = document.getElementById('customGrid');

defaultGrid(16);

function defaultGrid(squares) {
    if (squares > 64) {
        alert("No mas de 64 cuadrados por lado");
        makeRows(16);
        makeColumns(16);
    }
    else {
    makeRows(squares);
    makeColumns(squares);
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", () => {
        cells[i].style.background = "black";
        })};
    }
}
function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

function getRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

customGrid.addEventListener('click', () => {
    removeAllChildNodes(container)
    defaultGrid(prompt("Cuadrados por lado (no mas de 64)", 16))
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", () => {
        cells[i].style.background = "black";
})}});
reset.addEventListener('click', () => {
    for (let i = 0; i < cells.length; i++){
        cells[i].style.background = "rgb(235, 231, 231)";}
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", () => {
        cells[i].style.background = "black";
})}});
//randomColor.addEventListener('click', () => {
//   newColor = getRandomColor();
//    for(let i = 0; i < cell.length; ++i) {
//    cell[i].style.background = newColor;
//}});
randomColor.addEventListener('click', () => {
newColor = getRandomColor();
for (let i = 0; i < cells.length; i++){
cells[i].addEventListener("mouseover", () => {
cells[i].style.background = newColor;
})}});

rainbow.addEventListener('click', () => {
for (let i = 0; i < cells.length; i++){
cells[i].addEventListener("mouseover", () => {
rainbowColor = getRandomColor();
cells[i].style.background = rainbowColor;
})}});

black.addEventListener('click', () => {
for (let i = 0; i < cells.length; i++){
cells[i].addEventListener("mouseover", () => {
cells[i].style.background = "black";
})}});

borrador.addEventListener('click', () => {
for (let i = 0; i < cells.length; i++){
cells[i].addEventListener("mouseover", () => {
cells[i].style.background = "rgb(235, 231, 231)";
})}});