document.getElementById("mi-boton").addEventListener("click",register);
document.getElementById("mi-boton1").addEventListener("click",login);


var contenedor__login_register = document.querySelector(".contenedor__login-register")
var formulario_login = document.querySelector(".formulario__login")
var formulario_register = document.querySelector(".formulario__register")

function register(event){
    event.preventDefault();
    formulario_register.style.display = "block";
    formulario_login.style.display = "none";

}

function login(event){
    event.preventDefault();
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";

}