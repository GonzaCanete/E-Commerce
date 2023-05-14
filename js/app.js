

// button.addEventListener("input", (e)=>{
//     console.log(e.target.value);
// })                   esto me sirve para formularios, lee el input y devuelve el valor completo
//                      si hago un e.data me devuelve caracter por caracter que se ingresa


// // probando agregar productos al carrito
// const cartTitle = document.querySelector(".card-title");
// const cartCost = document.querySelector(".card-cost");
// const addCartButton = document.querySelector("#add-cart");
// addCartButton.addEventListener("click", (e)=>{
//     console.log(cartTitle.textContent);
//     console.log(cartCost.textContent);
// })

// probando registro

// const registerUser = []
// const name = document.querySelector("#name");
// name.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// })
// const lastname = document.querySelector("#lastname");
// registerUser.push(lastname.value)
// const email = document.querySelector("#email");
// registerUser.push(email.value)
// const password = document.querySelector("#password");
// registerUser.push(password.value)
// const confirmPassword = document.querySelector("#confirm-password");
// registerUser.push(confirmPassword.value)
// const buttonRegister = document.querySelector("#register-button");
// buttonRegister.addEventListener("click", (e)=>{
//         e.preventDefault();
//         console.log(registerUser);
//         const registerUserStr = JSON.stringify(registerUser);
//         localStorage.setItem("registerUser", registerUserStr);
//     })

// // probando login

// const loginEmail = document.querySelector("#login-email");
// const loginPassword = document.querySelector("#login-password");
// const buttonLogin = document.querySelector("#login-button");
// buttonLogin.addEventListener("click", (e)=>{
//     const registerUserRecovery = JSON.parse(localStorage.getItem("registerUser"))
//     e.preventDefault();
//     if (loginEmail.value === registerUserRecovery.email && loginPassword.value === registerUserRecovery.confirmPassword) {
//         console.log("Ingreso correcto");
//     }else{
//         console.log("Ingreso incorrecto");
//     }
//     })


// local storage guarda por más tiempor que el session storage
// para mandar al local storage hay que pasarlo a JSON 
// para pasar un objeto o array a JSON, tenemos la función stringify

// const playstation5 = {
//     name: "Playstation 5",
//     price: 1499,
// }

// const playstation5str = JSON.stringify(playstation5);
// localStorage.setItem("playstation 5", playstation5str)

// const array = ["play1", "play2"];
// const arraystr = JSON.stringify(array);
// localStorage.setItem("array", arraystr)

// const array = [1, 2, 3, 3, 4, 5, 6, 6];
// const arraystr = JSON.stringify(array);
// localStorage.setItem("array", arraystr);

// const nombre = prompt ("Ingrese su nombre");
// const nombrestr = JSON.stringify(nombre);
// localStorage.setItem("nombre", nombrestr);

// const nombreRecuperado = JSON.parse(localStorage.getItem("nombre"));
// console.log(nombreRecuperado);

// const nombres = [];
// for (i = 1; i <= 3; i++){
//     const name = prompt ("Ingrese su nombre");
//     nombres.push(name);
// }
// const nombresstr = JSON.stringify(nombres);
// localStorage.setItem("nombres", nombresstr);

// const namesRecovery = JSON.parse(localStorage.getItem("nombres"))
// console.log(namesRecovery);

// Otra prueba de registro con localStorage --- FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Leo los datos de registro
const userName = document.querySelector("#name");
const userLastname = document.querySelector("#lastname");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userPassword2 = document.querySelector("#confirm-password");
const regButton = document.querySelector("#register-button");
regButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(userEmail.value);
    // Creo un object con los datos ingresados en registro
    const user = {
        name: userName.value,
        lastname: userLastname.value,
        email: userEmail.value,
        password: userPassword.value,
    }
    //Convierto el object a JSON para almacenarlo en localStorage y no tener que registrarme cada vez que use la página
    const userStr = JSON.stringify(user);
    localStorage.setItem("user", userStr);
})

// Prueba de login 
// Leo los datos de login
const userEmailLogin = document.querySelector("#login-email");
const userPasswordLogin = document.querySelector("#login-password");
const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", (e)=>{
    e.preventDefault();
    // Comparo los datos del email del login con el del object User que creé en el registro, y comparo el password.
    // El problema es que no se si puedo usar al user así, o tengo que importarlo desde  el localStorage
    if (userEmailLogin.value === user.email && userPasswordLogin === user.password){
        // Muestro mensaje de login correcto
        console.log("Login Correcto");
    }
    // Esto lo comento porque tengo dudas de como hacerlo. ¿Como selecciono el dato que quiero traer del localStorage, ej, traer solamente el email del user y el password? Porque entiendo que así traigo el user completo como un string en formato JSON.
    // if (userEmailLogin.value === JSON.parse(localStorage.getItem("user")) && userPasswordLogin.value === JSON.parse(localStorage.getItem("user"))){
    //     // Muestro el mensaje
    //     console.log("Login Correcto");
    // }
})
