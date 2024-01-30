console.log("Bienvenido");
//create an object reference to the div containing images
let oImageDiv=document.getElementById('munieco')
//create an object reference to output
//let parrafoSalida = document.querySelector('textarea');
let parrafoSalida = document.querySelector('.salidaTexto');
let entrada = 0;

/*Como utilizar 
let e1 = document.getElementsByClassName('entradaTexto').value;
let e2 = document.getElementById("anuncioTexto").value;
parrafoSalida.innerHTML = "Encriptar " + parrafo1;
console.log("class Value "+ e1);
console.log("class Elemento "+ e2);
console.dir("class Dir "+ e1);
*/


//botones
function encriptar(){
    //bandera inicializa
    entrada = 1;
    let palabraNueva = null;
    let enc = null;
    let diccionario=[]
    //create an object reference to input
    let parrafo = document.querySelector('.entradaTexto');
    if(parrafo.value.length > 0){
        //encriptar
        //alert(parrafo.value.length);
        showHide();
        let verdad = vowelTest(parrafo.value);
        //alert(verdad);
        if (verdad == true || verdad > 0) 
        {
            console.log("procesa: encuentra vocales y reemplaza");
            //Bard. (2023). Google.com. https://bard.google.com/chat/989b3b9612f81760
            //Uso de Strings en JS. (2024). Cursoweb.net. https://cursoweb.net/apuntes/js/08%20-%20cadenas_texto.html
            //alert(verdad);
            //console.log(parrafo.value);
            //console.log(parrafo.value[1]);
            //console.log(parrafo.value.length);
            /*
            for (let posicion = 0; posicion<parrafo.value.length; posicion++){
                console.log(parrafo.value[posicion]);
            }
            */
            //diccionario = parrafo.value;
            //console.log("resulta");
            //console.log(diccionario);

            /*lee queryselector.valui
            for (letra in parrafo.value){
                console.log(parrafo.value[letra]);
                diccionario.push(parrafo.value[letra]);
            }
            */
            for (letra in parrafo.value){
                //console.log(parrafo.value[letra]);
                //for (letra in diccionario){
                //    console.log(diccionario[letra]);
                enc = parrafo.value[letra];
                console.log(enc);
                //switch(parrafo.value[letra]){
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
                        enc="ufaqt";
                        break;
                    default:
                        enc = parrafo.value[letra];
                        break;                                                                                               
                }
                diccionario.push(enc);
                entrada = 0
            }
        }
        console.log(diccionario.join(''));
        //parrafoSalida.innerHTML = "Encriptar " + parrafo.value;
        parrafoSalida.innerHTML = diccionario.join('');
        //
        //entrada = 0
    }
    //alert(entrada);
    if (entrada == 0){
        //inicializa input
        parrafo.value=null;
        parrafo.focus(); //document.querySelector('.entradaTexto').focus();
        parrafo.placeholder = "Ingresa el texto aquí.";
    }    
}


function  desencriptar(){

    //create an object reference to input
    let parrafo = document.querySelector('.entradaTexto').value;
    console.log("contenido a desencriptar: " + parrafo);
    //console.log(parrafo.replaceAll("ai","a"));
    const mapObj = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober:"o",
        ufaqt: "u"
      };
    console.log(mapObj);
    //parrafo = "aienterimesoberufaqt";
    console.log(": "+parrafo);
    //parrafo = parrafo.replace(/\b(?:ai|enter|imes|ober|ufaqt)\b/gi, matched => mapObj[matched]);
    parrafo = parrafo.replace(/(?:ai|enter|imes|ober|ufaqt)/gi, matched => mapObj[matched]);
    console.log("R: "+parrafo);
    parrafoSalida.innerHTML = "desEncriptar: " + parrafo;
    //parrafoSalida.innerHTML = parrafo.replaceAll("ai","a");
    hideShow()
}


function vowelTest(s) {
    //alert(s);
    //opc 1
    //return (/^[aeiou]$/i).test(s); //true || false

    //opc 2: o97. (2024). How to check if string has vowels? Stack Overflow. https://stackoverflow.com/questions/67881090/how-to-check-if-string-has-vowels
    //const vowelRegex = /[aeiou]/i;
    //return vowelRegex.test(s); //true || false

    //opc 3: JavaScript Program to Count the Number of Vowels in a String. (2023). Programiz.com. https://www.programiz.com/javascript/examples/count-vowels
    return s.match(/[aeiou]/gi).length;


}
    

function copiar(){
    let parrafo = document.querySelector('.entradaTexto');
    if(document.querySelector('.salidaTexto').value.length == 0 || document.querySelector('.salidaTexto').value == null){
        alert("nada que copiar");
    }else{
        //recordar que ya se tiene en un diccionario pero esta dentro de una funcion
        parrafo.value = document.querySelector('.salidaTexto').value;
    }
    //alert("tam "+document.querySelector('.salidaTexto').value.length + " " + document.querySelector('.salidaTexto').value);
    //regresar el foco al input
}




//imagen
function showHide(){
    //set display to inline if currently none, otherwise to none
    oImageDiv.style.display=(oImageDiv.style.display=='none')?'inline':'none'
    }

function hideShow(){
    //set display to inline if currently none, otherwise to none
    oImageDiv.style.display=(oImageDiv.style.display=='inline')?'none':'inline'
}
console.log("fin");


/*
//Enabling and Disabling images onClick with a button. (2024). Webmaster World. https://www.webmasterworld.com/javascript/1411.htm
//Montiel, C. (2024). Disable or enable an html5 image with javascript. Stack Overflow. https://stackoverflow.com/questions/35187239/disable-or-enable-an-html5-image-with-javascript

‌
*/

/*

    //else {
    //    alert(parrafoSalida.textLength)
        
        //borrar
        //place holder
        //focus
    //    alert(parrafo.value.length);
    //    parrafo.focus();
    //    parrafo.placeholder = "Type name here..";
        
}
*/
    


    /*        
    
            if(parrafoSalida.textLength > 0){
                parrafo.focus();
                
            }
    //var mensaje = document.querySelector(".entradaTexto").value;
    var mensaje = document.querySelector(".entradaTexto");
        var caracteres = mensaje.value.length;
        //alert(mensaje.length);
        alert(caracteres);
        */
/*
        alert(parrafo.value);
    alert(caracteres);
    let contado = (document.querySelector('.entradaTexto').length);
    alert(contado);
    if(document.querySelectorAll('.entradaTexto').length > 0)
    parrafo.value = ""
elif
parrafo.placeholder = "escribit algo"
//document.querySelector('.entradaTexto').placeholder = "Type name here..";
//let parrafo = document.querySelector('.entradaTexto').value;
*/


/** 
 * Agradecimientos fuentes consultadas
 * aqui la manera de crear el contador de caracteres | Foro Alura Latam. (2022, March 3). Alura Latam. https://app.aluracursos.com/forum/topico-aqui-la-manera-de-crear-el-contador-de-caracteres-112367
 * Kanna, M. (2021, January 18). How to Find the Number of Vowels in a String with JavaScript. FreeCodeCamp.org; freeCodeCamp.org. https://www.freecodecamp.org/news/find-the-number-of-vowels-in-a-string-with-javascript/
 * o97. (2024). How to check if string has vowels? Stack Overflow. https://stackoverflow.com/questions/67881090/how-to-check-if-string-has-vowels
 * Green, A. (2024). Replace multiple strings with multiple other strings. Stack Overflow. https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
 * Word boundary: \b. (2021). Word boundary: \b. Javascript.info. https://javascript.info/regexp-boundary
 * 
 * 
 * 
 * 
 * hola beto como estas, espero que bien. yo muy agusto
 * 
 * 
 * .
 * matched => mapObj[matched])
 * equivale a...
 * function(matched){
        return mapObj[matched];



 */

