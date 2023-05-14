// Probando función para agregar productos al carrito
const addCartButton = document.querySelector("#add-cart");
addCartButton.addEventListener("click", agregarProducto());

function agregarProducto() {
    const cartTitle = document.querySelector(".card-title");
    const cartCost = document.querySelector(".card-cost");
    const addCartButton = document.querySelector("#add-cart");
    addCartButton.addEventListener("click", (e)=>{
        console.log(cartTitle.textContent);
        console.log(cartCost.textContent);
    })
}