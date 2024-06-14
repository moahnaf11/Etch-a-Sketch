let container = document.querySelector(".container");
container.style.width = "800px";

const body = document.querySelector("body");
let button = document.createElement("button");
button.textContent = "Change grid size";
body.appendChild(button)


let opacity = 0;
button.addEventListener("click", (e) => {
    container.remove();
    let gridSize;
    gridSize = Number(prompt("Enter a number 1 and 100 for the grid size"))
    while (gridSize > 100 || gridSize <= 0 || isNaN(gridSize)) {
        gridSize = Number(prompt("Enter a number 1 and 100 for the grid size")) 
    }
    container = document.createElement("div");
    container.classList.add("container");
    container.style.width = "800px";
    body.appendChild(container);
    let boxWidth = 800 / gridSize;
    for (let i = 0; i < gridSize; ++i) {
        for (let x = 0; x < gridSize; ++x) {
            const box = document.createElement("div");
            box.style.width = boxWidth + "px";
            box.style.height = boxWidth + "px";
            box.classList.add("small-box");
            container.appendChild(box);

            box.addEventListener("mouseover", (e) => {
                console.log("Mouseover event fired");
                if (opacity < 100) {
                    opacity += 10;
                }   else {
                    opacity = 10;
                }
                box.style.background = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} / ${opacity}%)`;
                

            })
            
        }
    }
})










