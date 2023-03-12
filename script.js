const canvasDiv = document.createElement("div");
const canvasSlider = document.getElementById("canvas-slider");
const color = document.getElementById("pen-color");
const container = document.querySelector(".sketch-container");
const resetButton = document.querySelector('button[name="reset"]');
const sizeDiv = document.querySelector(".size");
const sizeText = document.querySelector(".size-text");

const initialSize = canvasSlider.value;
canvasDiv.classList.add("square");

function createCanvas(size) {
  let squareWidth = (1 / size) * 100; 
  container.textContent = '';

  for (let i = 0; i < size ** 2; i++) {
    let clone = canvasDiv.cloneNode(false);
    clone.style.width = `${squareWidth}%`;
    container.appendChild(clone);
  }
}

function resetCanvas() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#ffffff";
  });
}

createCanvas(initialSize);

let isDrawing = false;

function draw(event) {
  if (isDrawing && event.target.classList.contains("square")) {
    event.target.style.backgroundColor = color.value;
  }
}
container.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("square")) {
    isDrawing = true;
    draw(event);
  }
});

container.addEventListener("mousemove", draw);

container.addEventListener("mouseup", () => {
  isDrawing = false;
})

resetButton.addEventListener("click", resetCanvas);

canvasSlider.addEventListener("input", () => {
  createCanvas(canvasSlider.value);
  sizeText.textContent = `${canvasSlider.value} x ${canvasSlider.value}`;
  sizeDiv.appendChild(sizeText);
});