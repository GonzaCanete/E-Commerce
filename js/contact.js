const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
    Swal.fire(
        'Mensaje enviado',
        'Nos pondremos en contacto a la brevedad',
        'success'
    )
})