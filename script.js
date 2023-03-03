function encriptar(){
    var frase = document.getElementById("textoDesencriptar").value.toLowerCase();

    //i = para que tome letras mayusculas y minusculas
    //g = tomara en cuenta toda la inea y la oracion
    //m = tomara en cuenta multiples lineas

    var textoDesencriptar = frase.replace(/e/img,"enter");
    var textoDesencriptar = textoDesencriptar.replace(/o/img,"ober");
    var textoDesencriptar = textoDesencriptar.replace(/i/img,"imes");
    var textoDesencriptar = textoDesencriptar.replace(/a/img,"ai");
    var textoDesencriptar = textoDesencriptar.replace(/u/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptar;

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-title").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}
    

function desencriptar(){
    var frase = document.getElementById("textoDesencriptar").value.toLowerCase();

    //i = para que tome letras mayusculas y minusculas
    //g = tomara en cuenta toda la inea y la oracion
    //m = tomara en cuenta multipless lineas

    var textoDesencriptar = frase.replace(/enter/img,"e");
    var textoDesencriptar = textoDesencriptar.replace(/ober/img,"o");
    var textoDesencriptar = textoDesencriptar.replace(/imes/img,"i");
    var textoDesencriptar = textoDesencriptar.replace(/ai/img,"a");
    var textoDesencriptar = textoDesencriptar.replace(/ufat/img,"u");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptar;
}

function copiar(){

    var mensaje = document.querySelector("#textoDesencriptado");

    mensaje.select();
    document.execCommand("copy");
}