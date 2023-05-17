// traigo el carrito desde el localStorage
const productsInCart = JSON.parse(localStorage.getItem("cart"));

const emptyCartContainer = document.querySelector("#carrito-vacio");
const productContainer = document.querySelector("#carrito-productos");
const actionCartContainer = document.querySelector("#carrito-acciones");
const deleteCart = document.querySelector(".carrito-acciones-vaciar");

function addProductsToCart() {
    if (productsInCart) {

        emptyCartContainer.classList.add("disabled");
        productContainer.classList.remove("disabled");
        actionCartContainer.classList.remove("disabled");
    
        productContainer.innerHTML ="";
    
        productsInCart.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${product.name}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${product.quantity}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>U$S ${product.price}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>U$S ${product.price * product.quantity}</p>
                </div>
                <button id="${product.id} class="carrito-producto-eliminar"><ion-icon name="close-circle-outline"></ion-icon></button>
                `
    
            productContainer.append(div);
        })
    
    }else{
    
    }
    
}

addProductsToCart();

// funcion para vaciar carrito
