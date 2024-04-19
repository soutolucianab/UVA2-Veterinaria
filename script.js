const modoClaroBtn = document.getElementById("modoClaro");
const modoOscuroBtn = document.getElementById("modoOscuro");

modoClaroBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f0f0f0"; 
});

modoOscuroBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#828282"; 
});
