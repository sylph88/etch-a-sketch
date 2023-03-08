const appDiv = document.createElement("div");
const color = document.querySelector("#pen-color")
const container = document.querySelector(".sketch-container")
const resetButton = document.querySelector('button[name="reset"]');
const canvasSlider = document.querySelector("#canvas-size");

const initialSize = canvasSlider.value;
appDiv.classList.add("square");

function createCanvas(size) {
  let squareWidth = (1 / size) * 100; 

  for (let i = 0; i < size ** 2; i++) {
    let clone = appDiv.cloneNode(false);
    clone.style.width = `${squareWidth}%`;
    container.appendChild(clone);
  }
}

createCanvas(initialSize);

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
      event.target.style.backgroundColor = color.value;
    }
});

resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((x) => {
        x.style.backgroundColor = "#ffffff";
    })
});

canvasSlider.addEventListener('input', () => {
    container.textContent = '';
    createCanvas(canvasSlider.value);
});

/*
let square = container.querySelectorAll(".square");
let requestId;

function render() {
  square.forEach((square) => {
    square.style.backgroundColor = color.value;
  });
  requestId = undefined;
}

function scheduleRender() {
  if (!requestId) {
    requestId = requestAnimationFrame(render);
  }
}

color.addEventListener("input", scheduleRender);
*/

