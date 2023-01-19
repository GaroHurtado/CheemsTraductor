var entradaUser = document.getElementById("entrada");
entradaUser.focus()
var salidaUser = document.getElementById("salida");
var texto="";

function borrarEntrada(){
    entradaUser.value=""
}

function traducir(){
  
    var cambio=["em","im","om","um","am"];
    var letras=["e","i","o","u","a"];
    texto = String(entradaUser.value);
    texto = texto.toLowerCase();
    var len=texto.length
    var x = 0;
  
    while(x<=len){
        texto=texto.replaceAll(letras[x],cambio[x])
        x++
      
    }
   
    salidaUser.value=texto;
}
function copy() {
    let copyText = document.getElementById("salida");
    copyText.select();
    document.execCommand("copy");
    alert("Se ha copiado al portapaeles con exito")
    
}