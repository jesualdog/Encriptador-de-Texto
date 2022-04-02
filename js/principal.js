var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var cajaTexto = document.querySelector("#input-texto");
    var texto = cajaTexto.value;
    checkTextoUsuario(texto);
    var textoEncriptado = encriptar(texto);
    document.getElementById("resultado").value=textoEncriptado;
    limpiarCampo(cajaTexto);
    return;
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var cajaTexto = document.querySelector("#input-texto");
    var texto = cajaTexto.value;
    checkTextoUsuario(texto);
    var textoDesencriptado = desencriptar(texto);
    console.log(textoDesencriptado);
    document.getElementById("resultado").value=textoDesencriptado;
    limpiarCampo(cajaTexto);  
    return;
});

var botonCopy = document.querySelector("#btn-copy");
botonCopy.addEventListener("click",function(event){
    event.preventDefault();
    var cajaTexto = document.querySelector("#resultado");
    var texto = cajaTexto.value;
    checkTextoUsuario(texto);
    copiar();
    limpiarCampo(cajaTexto);      
    return;
});

function checkTextoUsuario(texto){
    if (texto.length==0){
        alert("Debe existir un mensaje!");
        return false;
    } else{    
        for(var i=0; i<texto.length; i++){
            var textoAscii= texto.charCodeAt(i);
            if(textoAscii<96 || textoAscii>122 ){
                if(textoAscii!=32){
                    alert("No se puede introducir texto en mayuscula, caracteres especiales o numeros. Intentelo de nuevo!");
                    return false;
                }
            }                                                        
        }
    }
}

function encriptar(texto){
   var textoEncriptado = texto.replaceAll("e","enter").
                                replaceAll("i","imes").
                                replaceAll("a","ai").
                                replaceAll("o","ober").
                                replaceAll("u","ufat");
   return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = texto.replaceAll("enter","e").
                                   replaceAll("imes","i").
                                   replaceAll("ai","a").
                                   replaceAll("ober","o").
                                   replaceAll("ufat","u");
   return textoDesencriptado;
}

function copiar(){
    var textCopy = document.getElementById("resultado");
    textCopy.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

function limpiarCampo(cajaTexto){
    cajaTexto.value="";
}