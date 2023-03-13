//Definimos las constantes a utilizar
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const clave = document.getElementById("clave")
const formulario = document.getElementById("formulario")


formulario.addEventListener("submit", e=>{
    e.preventDefault()
    //Expresion para validar un correo en un formulario
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false

    //Defininiendo parametros del Nombre
    if(nombre.value.length<6){
        alert("Nombre muy corto"); //alerta por su nombre es menor que 6
        entrar = true
    }
    //Definimos un correo introducido valido
    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        alert("El correo no es valido") //alert si encontramos un correo invalidos
        entrar= true
    }
    //Definimos los parametros de la clave
    if(clave.value.length<8){
        alert("La clave no es valido") //alert si la clave es invalida
        entrar= true
    }

    if(entrar){
        alert("Valores invalidos , No enviado")//alert si algunos de los datos es incorrecto, no se envian datos
    }else{
        alert("Datos Enviados") // Alert de datos correctos , se envian datos
    }

})