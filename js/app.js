

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



// Otra prueba de registro con localStorage --- FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Leo los datos de registro
const userName = document.querySelector("#name");
const userLastname = document.querySelector("#lastname");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userPassword2 = document.querySelector("#confirm-password");
const regButton = document.querySelector("#register-button");
regButton.addEventListener("click", (e)=>{
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

// Prueba de login  FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Leo los datos de login
const userEmailLogin = document.querySelector("#login-email");
const userPasswordLogin = document.querySelector("#login-password");
const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", (e)=>{
    e.preventDefault();
    // Traigo los datos del localStorage
    const userRecovery = JSON.parse(localStorage.getItem("user"));
    if (userEmailLogin.value === userRecovery.email && userPasswordLogin.value === userRecovery.password){
        // Muestro el mensaje
        console.log("Login Correcto");
    }else{
        // Muestro el mensaje
        console.log("Login Incorrecto");
    }
})

