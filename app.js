console.log("Bienvenido");
let parrafoSalida = document.querySelector('textarea');

function encriptar(){
    console.log("Encriptar");
    //let parrafo1 = document.querySelector('input').value;
    let parrafo = document.getElementById('entradaTexto').value;
    parrafoSalida.innerHTML = "Encriptar " + parrafo;
}



function  desencriptar(){
    console.log("desEncriptar");
    let parrafo = document.querySelector('#entradaTexto').value;
    parrafoSalida.innerHTML = "desEncriptar " + parrafo;
}


console.log("fin");