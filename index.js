const grid = document.querySelector("#container");
const btn = document.getElementById("button");

function handleGridSize() {
   let nbr = prompt("Enter the number of squares per side for the new grid");
   if (nbr === null || nbr === "" || nbr > 100) {
       nbr = 16;
       if (nbr > 100) alert("max number is 100");
   }
   return parseInt(nbr); // converting string to number (integer)
}

btn.addEventListener("click", () => {
   const size = handleGridSize();
   grid.innerHTML = ''; //clearning the grid
   
   for (let i = 0; i < (size * size); i++) {
       const div = document.createElement("div");
       div.className = "box";
       div.style.cssText = `
           flex-basis: calc(100% / ${size});
           height: calc(100% / ${size});
           background-color: #3498db;
           border: 1px solid black;
           box-sizing: border-box;
       `;
       div.addEventListener("mouseenter", (event) => {
           event.target.style.backgroundColor = '#f0f0f0';
       });
       grid.appendChild(div);
   }
});