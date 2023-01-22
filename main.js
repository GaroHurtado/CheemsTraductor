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
    function maquina(){
        let i = 0;
        let texto1 = texto.split("");
        console.log(texto1)
        salidaUser.value="";
        let imp = setInterval(function(){
            salidaUser.value += texto1[i];
            i++
            if(i == texto1.length){
                clearInterval(imp)
            }
        } ,65)
    }
    var salida = maquina();
}
function copy() {
    let copyText = document.getElementById("salida");
    copyText.select();
    document.execCommand("copy");
    alert("Se ha copiado al portapaeles con exito")
    
}