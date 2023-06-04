

// traigo los archivos con DOM
const productContainer = document.querySelector(".outstanding-container");
let addButton = document.querySelectorAll(".btn");
const cartNumber = document.querySelector("#cart-indicator");
const itemIndicator = document.querySelector("#cart-indicator-msg");

// Creo la variable carrito, un array vacio
let cart;
const productsInCartLS = JSON.parse(localStorage.getItem("cart"));
if (productsInCartLS){
    cart = productsInCartLS
}else {
    cart = [];
}

// traigo los datos de mi json con Fetch

// Declarar la variable products fuera de la función addProducts
let products;

fetch("./js/data.json")
    .then(response => response.json())
    .then(data => {
        products = data; // Asigno los datos a la variable products para poder usarla en otras funciones
        addProducts(products);
        addProductToCart(products);
    });



// funcion para agregar los productos al HTML recorriendo el array de productos y agregandole los atributos
function addProducts(products) {

    productContainer.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img src="${product.img}" class="card-img-top" alt="procesador intel i9">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h3 class="card-cost">U$S ${product.price}</h3>
          <button class="btn btn-primary" id="${product.id}">Añadir al carro</button>
        </div>
        `

        productContainer.append(div);

        // llamo la funcion actualizar boton
        refreshButtons()
        
    })
}

// llamo la funcion agregar productos al HTML
addProducts();

// funcion para actualizar los botones
function refreshButtons() {
    addButton = document.querySelectorAll(".btn");
    addButton.forEach(button => {
        // llamo la funcion agregar productos al carrito mediante un evento click
        button.addEventListener("click", addProductToCart)
        })
        
}

// funcion para agregar productos al carrito
function addProductToCart(e) {
    // comparo el id del evento con el id del producto
    const idButton = e.currentTarget.id;
    const productAdd = products.find(product => product.id == idButton);
    // compruebo si el id del producto ya esta en el carrito, si no esta lo agrego al array y si esta, le sumo una cantidad
    if (cart.some(product => product.id == idButton)) {
        const index = cart.findIndex(product => product.id == idButton);
        cart[index].quantity++;
        Toastify({
            text: "Producto añadido",
            duration: 3000,
            destination: "../pages/cart.html",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "orange",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }else{
        productAdd.quantity = 1;
        cart.push(productAdd);
        Toastify({
            text: "Producto añadido",
            duration: 3000,
            destination: "../pages/cart.html",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "orange",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    // agrego un icono al lado del carrito para notificar que contiene items
    itemIndicator.innerHTML = `<ion-icon name="checkmark-circle-outline" id="item-check"></ion-icon>`
    
    //Almaceno en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

