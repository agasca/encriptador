console.log("Bienvenido");
let parrafoSalida = document.querySelector('textarea');

/*Como utilizar 
let e1 = document.getElementsByClassName('entradaTexto').value;
let e2 = document.getElementById("anuncioTexto").value;
parrafoSalida.innerHTML = "Encriptar " + parrafo1;
console.log("class Value "+ e1);
console.log("class Elemento "+ e2);
console.dir("class Dir "+ e1);
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