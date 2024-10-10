var texto = document.getElementById('texto');
var button = document.getElementById('btnSubmit');

if(document.getElementById('lepero').checked){
 button.addEventListener("click", creaHistoriaLepero, false);
}else if(document.getElementById("murciano").checked){
 button.addEventListener("click", creaHistoriaMurciano, false);
}else{
    button.addEventListener("click", creaHistoriaCerdaria, false);
}

function creaHistoriaMurciano() {

 texto.innerHTML = "";
 var nombre = document.getElementById('nombre').value.toString();

 var historiasMurciano = [

   "En Murcia las naranjas siempre han sido muy baratas, pero ahora le parecen caras.",
   "La ciudad se llena siempre en verano, pero en invierno es un desierto. ",
   "" + nombre + " visitaba a su abuela, ella siempre le hacía buena comida. ",
   "La Juventud lo dejó deprimido y ahora " + nombre + " solo tiene a su peluche. ",
   "No tenía ganas de hacer deporte así que " + nombre + " engordo hasta el límite. ",
   "Los donuts eran su debilidad, pero últimamente estaba comportándose de forma extraña. ",
   "" + nombre + " antes era calvo, pero se hizo un injerto capilar. "

 ];

 while (historiasMurciano.length > 0) {

   var nAleatorio = Math.round(Math.random() * historiasMurciano.length -1);

   if(historiasMurciano[nAleatorio] == undefined){
     nAleatorio = Math.round(Math.random() * historiasMurciano.length -1);
   }else{
     texto.innerHTML += historiasMurciano[nAleatorio];
     historiasMurciano.splice(nAleatorio, 1);
   }
 }
}

function creaHistoriaLepero() {

 texto.innerHTML = "";
 var nombre = document.getElementById('nombre').value.toString();

 var historiasLepero = [

   "En Lepe las flores se marchitan en Primavera, así que no había excusa. ",
   "" + nombre + " era una persona modesta que conducía un Ford Ka. ",
   "Cada semana " + nombre + " visitaba a sus padres. ",
   "Cualquiera lo hubiera adivinado. ",
   "Llovía fuerte aquella noche y " + nombre + " no podía dejar de pensar en los campos de fresas. ",
   "A " + nombre + " no le gustaba la informática. "

 ];

 while (historiasLepero.length > 0) {

   var nAleatorio = Math.round(Math.random() * historiasLepero.length -1);

   if(historiasLepero[nAleatorio] == undefined){
     nAleatorio = Math.round(Math.random() * historiasLepero.length -1);
   }else{
     texto.innerHTML += historiasLepero[nAleatorio];
     historiasLepero.splice(nAleatorio, 1);
   }
 }
}


function creaHistoriaCerdaria() {

    texto.innerHTML = "";
    var nombre = document.getElementById('nombre').value.toString();
   
    var historiasCerdaria = [
        "En Cerdaria, las flores se marchitan en Primavera, así que no había excusa. "+nombre+", una persona modesta que conducía un viejo Ford Ka, recorría las calles empedradas del pueblo sin prisa, pero con la sensación de que algo estaba a punto de suceder.",

        "Cada semana, "+nombre+" visitaba a sus padres en la casa donde había crecido, un hogar cálido con olor a pan recién horneado y café recién hecho. Esa rutina lo tranquilizaba. Sin embargo, esa tarde, todo parecía diferente. Cualquiera lo hubiera adivinado: la lluvia que empezaba a golpear el parabrisas del Ford Ka no era una simple tormenta; había algo extraño en el aire, una vibración que llenaba el ambiente con un halo de misterio.",

        "Llovía fuerte aquella noche y "+nombre+" no podía dejar de pensar en los campos de fresas que rodeaban Cerdaria. Cuando era niño, corría entre las hileras de plantas, riendo bajo el sol y manchándose las manos con el jugo rojo de las fresas maduras. Pero esa noche, las fresas se le antojaban diferentes, casi amenazantes, como si escondieran un secreto bajo su dulzura.",

        ""+nombre+" nunca había sido fanático de la informática; el simple hecho de encender una computadora le causaba incomodidad. No entendía cómo los bytes y las pantallas podían gobernar tanto del mundo moderno, pero justo esa noche, su teléfono, que apenas sabía usar, emitió un mensaje misterioso:",
    ];
   
    while (historiasCerdaria.length > 0) {
   
      var nAleatorio = Math.round(Math.random() * historiasCerdaria.length -1);
   
      if(historiasCerdaria[nAleatorio] == undefined){
        nAleatorio = Math.round(Math.random() * historiasCerdaria.length -1);
      }else{
        texto.innerHTML += historiasCerdaria[nAleatorio];
        historiasCerdaria.splice(nAleatorio, 1);
      }
    }
   }
