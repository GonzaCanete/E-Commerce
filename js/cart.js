// traigo el carrito desde el localStorage
const productsInCart = JSON.parse(localStorage.getItem("cart"));
// traigo mediante DOM 
const emptyCartContainer = document.querySelector("#empty-cart");
const productContainer = document.querySelector("#products-container");
const actionCartContainer = document.querySelector("#action");
const productInCartMessage = document.querySelector(".exclamation");
const buyButton = document.querySelector("#buy-button");

// funcion para agregar productos y mostrarlos en pantalla
function addProductsToCart() {
    if (productsInCart) {
        // modifico las clases del HTML
        emptyCartContainer.classList.add("disabled");
        productContainer.classList.remove("disabled");
        actionCartContainer.classList.remove("disabled");
<<<<<<< HEAD
    
    
        productContainer.innerHTML = ""
=======
        
        
        productContainer.innerHTML ="";
>>>>>>> 98acaef439358fd83f2eb3c5ccd1aa9acae45767
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
                    <small>Precio unitario</small>
                    <p>U$S ${product.price}</p>
                </div>
                <div class="product-budget">
                    <small>Total</small>
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
    Swal.fire({
      title: 'Seguro que quiere eliminar el carrito?',
      text: "Si confirma, no hay retorno",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'orange',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar carrito'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El carrito fue eliminado',
          'success'
        );
  
        // Vaciar el carrito solo si el usuario confirma
        productsInCart.length = 0;
  
        // Eliminar la key almacenada en el localStorage
        localStorage.removeItem("cart");
  
        // Realizar el resto de las acciones aquí, como actualizar la interfaz de usuario, etc.
        emptyCartContainer.classList.remove("disabled");
        productContainer.classList.add("disabled");
        actionCartContainer.classList.add("disabled");
        productContainer.innerHTML = "";
      }
    });
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


// le agrego un alert para simular la compra
buyButton.addEventListener("click", ()=>{
    Swal.fire(
        'Compra realizada',
        'Gracias por tu compra',
        'success'
    )
})
