const ROW_SIZE = 16;
const COLUMN_SIZE = 16;

const appDiv = document.createElement("div");
const color = document.querySelector("#pen-color")
const container = document.querySelector(".sketch-container")
const resetButton = document.querySelector('button[name="reset"]');

appDiv.classList.add("square");

for (let i = 0; i < ROW_SIZE * COLUMN_SIZE; i++) {
    let clone = appDiv.cloneNode(false);
    container.appendChild(clone);
}

const squares = document.querySelectorAll(".square");

squares.forEach((x) => {
    x.addEventListener("mouseover", () => {
        x.style.backgroundColor = color.value;
    });
});

resetButton.addEventListener("click", () => {
    squares.forEach((x) => {
        x.style.backgroundColor = "#ffffff";
    })
});

