const main = document.querySelector(".body")
const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const backgroundMensaje = document.querySelector(".principal-output")
const elementosMensaje = document.querySelector(".info-mensaje")
const btnCopiar = document.querySelector(".copiar")
const btnClaro = document.querySelector(".white-mode")
const btnOscuro = document.querySelector(".dark-mode")



function mostrarElementsoMsj(){
    backgroundMensaje.style.backgroundImage = "url(assets/Muñeco.png)"
    elementosMensaje.style.display = "block"
    btnCopiar.style.display = "none"
}
function esconderElementosMsj(){
    backgroundMensaje.style.backgroundImage = "none"
    elementosMensaje.style.display = "none"
    btnCopiar.style.display = "block"
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value= textoEncriptado
   
    inputTexto.value = ""
    if (textoEncriptado != ""){
        esconderElementosMsj()
    }
    else{
        mostrarElementsoMsj()
    }
   
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado
    inputTexto.value=""
    if (textoDesencriptado != ""){
        esconderElementosMsj()
    }
    else{
        mostrarElementsoMsj()
    }
        
    
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter",],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i=0;i < matrizCodigo.length;i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    
    return stringEncriptado
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter",],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i=0;i < matrizCodigo.length;i++){
        if (stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar= stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        
        }
    
    }
    return stringDesencriptar
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    if (mensaje.value !=""){
        inputTexto.value = mensaje.value
        mensaje.value = ""
        
        mostrarElementsoMsj()

    }

    

   
}
var valor = 0
function darkmode(){
    
    if (valor == 0){
        main.style.background = "#111B21"
        btnClaro.style.display = "block"
        btnOscuro.style.display = "none"
        valor = 1


    }
    else if (valor == 1){
        main.style.background = "#F3F5FC"
        btnClaro.style.display = "none"
        btnOscuro.style.display = "block"
        valor = 0
    }
    
}
