console.log("Bienvenido");
let parrafoSalida = document.querySelector('textarea');



/*Como utilizar 
let parrafo = document.getElementsByClassName('.entradaTexto').value;
parrafoSalida.innerHTML = "Encriptar " + parrafo;
*/
function encriptar(){
    console.log("Encriptar");
    let parrafo = document.querySelector('.entradaTexto').value;
    parrafoSalida.innerHTML = "Encriptar " + parrafo;
}



function  desencriptar(){
    console.log("desEncriptar");
    let parrafo = document.querySelector('.entradaTexto').value;
    parrafoSalida.innerHTML = "desEncriptar " + parrafo;
}


console.log("fin");