// traigo el carrito desde el localStorage
const productsInCart = JSON.parse(localStorage.getItem("cart"));
// traigo mediante DOM 
const emptyCartContainer = document.querySelector("#empty-cart");
const productContainer = document.querySelector("#products-container");
const actionCartContainer = document.querySelector("#action");


// funcion para agregar productos y mostrarlos en pantalla
function addProductsToCart() {
    if (productsInCart) {

        // modifico las clases del HTML
        emptyCartContainer.classList.add("disabled");
        productContainer.classList.remove("disabled");
        actionCartContainer.classList.remove("disabled");
    
        productContainer.innerHTML ="";
        // creo para cada producto del array, su correspondiente HTML
        productsInCart.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="product-title">
                    <small>Titulo</small>
                    <h3>${product.name}</h3>
                </div>
                <div class="product-quantity">
                    <small>Cantidad</small>
                    <p>${product.quantity}</p>
                </div>
                <div class="product-price">
                    <small>Precio</small>
                    <p>U$S ${product.price}</p>
                </div>
                <div class="product-budget">
                    <small>Subtotal</small>
                    <p>U$S ${product.price * product.quantity}</p>
                </div>
                <button id="${product.id} class="delete-item"><ion-icon name="close-circle-outline"></ion-icon></button>
                `
    
            productContainer.append(div);
        })
    
    }
    
}

//Llamo las funciones

addProductsToCart();
calculateTotal();



function clearCart() {
    // igualo a 0 la longitud del array en el carrito
    productsInCart.length = 0;
    
    // elimino la key almacenada en el localStorage
    localStorage.removeItem("cart");

    // devuelvo en pantalla
    emptyCartContainer.classList.remove("disabled");
    productContainer.classList.add("disabled");
    actionCartContainer.classList.add("disabled");
    productContainer.innerHTML = "";
}

function calculateTotal() {
    // comienzo la variable en 0
    let total = 0;
    // compruebo que hayan productos en el carro
    if (productsInCart) {
        // a cada producto del carro, le calculo el subtotal y lo agrego al total
        productsInCart.forEach(product => {
            const subtotal = product.price * product.quantity;
            total += subtotal;
        });
    }

    // devuelvo en pantalla el total
    const totalElement = document.querySelector("#total-buy");
    totalElement.textContent = `U$S ${total.toFixed(2)}`;
}
