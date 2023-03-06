const ROW_SIZE = 16;
const COLUMN_SIZE = 16;
const appDiv = document.createElement("div");
appDiv.classList.add("square");

const container = document.querySelector(".app-container")

for (let i = 0; i < ROW_SIZE * COLUMN_SIZE; i++) {
    let clone = appDiv.cloneNode(false);
    container.appendChild(clone);
}

const squares = document.querySelectorAll(".square");

squares.forEach((x) => {
    x.addEventListener("mouseover", () => {
        x.style.backgroundColor = "red";
    });
});

