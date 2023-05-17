
// Otra prueba de registro con localStorage
const userName = document.querySelector("#name");
const userLastname = document.querySelector("#lastname");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userPassword2 = document.querySelector("#confirm-password");
const regButton = document.querySelector("#register-button");

//leo el evento click para ingresar los datos
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

// Prueba de login
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

