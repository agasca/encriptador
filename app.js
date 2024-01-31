//console.log("Bienvenido");

let oImageDiv=document.getElementById('munieco')    //create an object reference to the div containing images

let parrafoSalida = document.querySelector('.salidaTexto'); //create an object reference to output  //let parrafoSalida = document.querySelector('textarea');
let entrada = 0;


function encriptar(){   //bandera inicializa
    entrada = 1;
    let palabraNueva = null;
    let enc = null;
    let diccionario=[]
    let parrafo = document.querySelector('.entradaTexto');  //create an object reference to input
    if(parrafo.value.length > 0){           //encriptar
        showHide();
        let verdad = vowelTest(parrafo.value);
        if (verdad == true || verdad > 0) {
            //console.log("procesa: encuentra vocales y reemplaza");
            for (letra in parrafo.value){
                enc = parrafo.value[letra];
                switch(enc){
                    case 'a':
                        enc="ai";
                        break;
                    case 'e':
                        enc="enter";
                        break;
                    case 'i':
                        enc="imes";
                        break;
                    case 'o':
                        enc="ober";
                        break;
                    case 'u':
                        enc="ufat";
                        break;
                    default:
                        enc = parrafo.value[letra];
                        break;                                                                                               
                }
                diccionario.push(enc);
                entrada = 0
            }
        }
        //console.log(diccionario.join(''));
        parrafoSalida.innerHTML = diccionario.join(''); //parrafoSalida.innerHTML = "Encriptar " + parrafo.value;
    }
    if (entrada == 0){  //inicializa input
        parrafo.value=null;
        parrafo.focus(); //document.querySelector('.entradaTexto').focus();
        parrafo.placeholder = "Ingresa el texto aquí.";
    }    
}


function  desencriptar(){
    let parrafo = document.querySelector('.entradaTexto').value;    //create an object reference to input
    //console.log("contenido a desencriptar: " + parrafo);
    const mapObj = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober:"o",
        ufat: "u"
      };
    parrafo = parrafo.replace(/(?:ai|enter|imes|ober|ufat)/gi, matched => mapObj[matched]);        //parrafo = parrafo.replace(/\b(?:ai|enter|imes|ober|ufaqt)\b/gi, matched => mapObj[matched]);
    parrafoSalida.innerHTML = "desEncriptar: " + parrafo;
    hideShow()
}


function vowelTest(s) {
    return s.match(/[aeiou]/gi).length;
}
    

function copiar(){
    let parrafo = document.querySelector('.entradaTexto');
    if(document.querySelector('.salidaTexto').value.length == 0 || document.querySelector('.salidaTexto').value == null){
        alert("nada que copiar");
    }else{  //recordar que ya se tiene en un diccionario pero esta dentro de una funcion
        parrafo.value = document.querySelector('.salidaTexto').value;
    }
    //alert("tam "+document.querySelector('.salidaTexto').value.length + " " + document.querySelector('.salidaTexto').value);
    //regresar el foco al input
}


function showHide(){    //imagen
    oImageDiv.style.display=(oImageDiv.style.display=='none')?'inline':'none';   //set display to inline if currently none, otherwise to none
}


function hideShow(){
    oImageDiv.style.display=(oImageDiv.style.display=='inline')?'none':'inline'; //set display to inline if currently none, otherwise to none
}
console.log("fin");






/** 
 * Agradecimientos fuentes consultadas
 * aqui la manera de crear el contador de caracteres | Foro Alura Latam. (2022, March 3). Alura Latam. https://app.aluracursos.com/forum/topico-aqui-la-manera-de-crear-el-contador-de-caracteres-112367
 * Kanna, M. (2021, January 18). How to Find the Number of Vowels in a String with JavaScript. FreeCodeCamp.org; freeCodeCamp.org. https://www.freecodecamp.org/news/find-the-number-of-vowels-in-a-string-with-javascript/
 * o97. (2024). How to check if string has vowels? Stack Overflow. https://stackoverflow.com/questions/67881090/how-to-check-if-string-has-vowels
 * Green, A. (2024). Replace multiple strings with multiple other strings. Stack Overflow. https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
 * Word boundary: \b. (2021). Word boundary: \b. Javascript.info. https://javascript.info/regexp-boundary
 * JavaScript Program to Count the Number of Vowels in a String. (2023). Programiz.com. https://www.programiz.com/javascript/examples/count-vowels
 * Enabling and Disabling images onClick with a button. (2024). Webmaster World. https://www.webmasterworld.com/javascript/1411.htm
 * Montiel, C. (2024). Disable or enable an html5 image with javascript. Stack Overflow. https://stackoverflow.com/questions/35187239/disable-or-enable-an-html5-image-with-javascript
 * 
 * 
 * matched => mapObj[matched])
 * equivale a...
 * function(matched){
        return mapObj[matched];
 *
 * hola beto como estas, espero que bien. yo muy agusto
 *
 * 
 * fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
 *                                                                                                        cobernclufatimesdober
 *                                                                                           concluido <> conclundefinedido
 *                                                                                                        co   nclu   i   do
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Llaves
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
Requisitos:
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"
La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
* 
*/