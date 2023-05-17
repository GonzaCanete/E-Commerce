const products = [
    {
        id: 1,
        name: "Elden Ring ps5",
        price: 70,
        img: '../img/elden-ring-ps5.jpg'
    },
    {
        id: 2,
        name: "Joystick ps5",
        price: 90,
        img: '../img/joystick-ps5.jpg'
    },
    {
        id: 3,
        name: "God of War: Ragnarok ps5",
        price: 70,
        img: '../img/god-of-war-ragnarok-20221131016774_1.jpg'
    },
    {
        id: 4,
        name: "Red dead Redemption 2 ps5",
        price: 45,
        img: '../img/rdr2-ps5.webp'
    },
    {
        id: 5,
        name: "Horizon forbidden west ps5",
        price: 70,
        img: '../img/horizon-2-forbidden-west-20201124144437_1.jpg'
    },
    {
        id: 6,
        name: "Consola playstation 5",
        price: 1100,
        img: '../img/ps5.jpg'
    },
    {
        id: 7,
        name: "Resident evil 4: Remake ps5",
        price: 90,
        img: '../img/re4-ps5.webp'
    },
    {
        id: 8,
        name: "Star wars jedi: Survivor ps5",
        price: 70,
        img: '../img/star-wars-jedi.jpg'
    },
    {
        id: 9,
        name: "The last of us: Part 1",
        price: 70,
        img: '../img/the-last-of-us-ps5.jpg'
    },
    {
        id: 10,
        name: "Nintendo switch The Legend of Zelda TOTK Edition",
        price: 850,
        img: '../img/nintendo-switch-zelda.webp'
    },
    {
        id: 11,
        name: "The Legend of Zelda Tears of the Kingdom",
        price: 105,
        img: '../img/zelda-tears-of-the-kingdom.webp'
    },
    {
        id: 12,
        name: "Nintendo switch",
        price: 550,
        img: '../img/nintendo-switch.jpg'
    },
    {
        id: 13,
        name: "Super Mario odyssey",
        price: 65,
        img: '../img/super-mario-odyssey-2017102611035_25.jpg'
    },
    {
        id: 14,
        name: "Xenoblade chronicles 3",
        price: 60,
        img: '../img/xenoblade.webp'
    },
    {
        id: 15,
        name: "Elden Ring xbox",
        price: 70,
        img: '../img/elden-ring-xbox.jpg'
    },
    {
        id: 16,
        name: "Red dead Redemption 2 xbox",
        price: 45,
        img: '../img/rdr2-xbox.jpg'
    },
    {
        id: 17,
        name: "Resident evil 4: Remake xbox",
        price: 80,
        img: '../img/re4-xbox.jpg'
    },
    {
        id: 18,
        name: "Star wars jedi: survivor xbox",
        price: 75,
        img: '../img/star-wars-xbox.jpg'
    },
    {
        id: 19,
        name: "Consola Xbox series X",
        price: 900,
        img: '../img/xbox-x.png'
    },
    {
        id: 20,
        name: "CPU Intel I9",
        price: 900,
        img: '../img/i9.jpg'
    },
    {
        id: 21,
        name: "Memoria M.2",
        price: 180,
        img: '../img/m.2.jpg'
    },
    {
        id: 22,
        name: "Motherboard Gygabyte Z790",
        price: 250,
        img: '../img/motherboard.png'
    },
    {
        id: 23,
        name: "GPU RTX-4090",
        price: 1800,
        img: '../img/rtx-4090.png'
    },
    {
        id: 24,
        name: "Monitor 27'",
        price: 350,
        img: '../img/monitor.jpg'
    },
    {
        id: 25,
        name: "Memoria RAM",
        price: 70,
        img: '../img/ram.jpg'
    },
    {
        id: 26,
        name: "GPU RTX-3080",
        price: 1400,
        img: '../img/rtx-3080.jpg'
    },
    {
        id: 27,
        name: "GPU RTX-4080",
        price: 1700,
        img: '../img/rtx-4080.png'
    },
    {
        id: 28,
        name: "CPU AMD Ryzen 9",
        price: 700,
        img: '../img/ryzen9.jpg'
    }

]

// traigo los archivos con DOM
const productContainer = document.querySelector(".outstanding-container");
let addButton = document.querySelectorAll(".btn");
const cartNumber = document.querySelector("#cart-indicator");

// Creo la variable carrito, un array vacio
let cart;
const productsInCartLS = JSON.parse(localStorage.getItem("cart"));
if (productsInCartLS){
    cart = productsInCartLS
}else {
    cart = [];
}


// funcion para agregar los productos al HTML recorriendo el array de productos y agregandole los atributos
function addProducts() {

    productContainer.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img src="${product.img}" class="card-img-top" alt="procesador intel i9">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Procesador Core Intel I9 10900k de 10ma generación.</p>
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
    }else{
        productAdd.quantity = 1;
        cart.push(productAdd);
    }
    
    //Almaceno en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

