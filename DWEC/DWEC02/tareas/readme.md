# Unidad de Trabajo 2: Estructura del lenguaje javascript

### Actividad 1. Tal y como ya hemos visto, hemos visto que en ciertas ocasiones el motor de ejecución de javascript puede estar apagado en el cliente, ya sea de forma voluntaria o involuntaria. En tales casos, conviene incluir un aviso empleando para ello las etiquetas <noscript>mensaje</noscript>. Añade dicha etiqueta en el código de una página y prueba el efecto desactivando para ello javascript en el navegador.

### Actividad 2. Indica el valor que generan las siguientes expresiones y el tipo de datos de los mismos (emplea para ello la función typeof()):
```
a. 2 > 3 +2
b. 1 + false +3.5
c. 4 * true + 2
d. 5 / 0
e. 10 > 2 > 0
f. 15 < 3 * 10
g. 3 * hola + 2
h. 5 / “hola”
i. π * 32
k. “Tienes” + 23 + “años”
```

### Actividad 3.  ¿Qué valor producirán las siguientes expresiones?
```
a. parseInt("15");
b. parseInt("15.5")
c. parseInt(15.5)
d. parseInt("true")
e. parseInt(true)
f. parseInt("Pedro")
g. parseInt(15 + "Pedro")
h. parseFloat("15.5")
i. parseFloat(15.5)
```

### Actividad 4. Observa el siguiente codigo.
```
<script>
    function saludar(){
        var nombre = "Pedro";
        alert("Hola" + nombre);
    }
    alert("Usuario: " + nombre);
    saludar();
</script>
```
####  A. ¿La variable nombre se define de modo local o global?
#### B. Copia y ejecuta el código para probar su funcionalidad. En caso de no funcionar cámbialo para solucionar el problema.

### Actividad 5. ¿Qué valor se obtendrá al ejecutar estas expresiones?
```
a. 16 << 2
b. 8 > 10 ? v1 = “sí” : v1 = “no”
c. var n=7; alert(“n vale “ + (++n));
d. var m=17; alert("m vale " + (m++)); alert(m);
e. 3 ^ 2
f. var y=17; y%=5;
g. var caja = ["percha", "balón"]; alert(caja[1]);
h. var a=3,b=6; var h = a > b ? a : b;
```

### Actividad 6. Observa el siguiente código:
```
var arr=[1,2,3,4];
  for(var i=0; i < arr.length; i++) {
   console.log(arr[i]);
  }
  for(var i=0, len=arr.length; i < len; ++i) {
   console.log(arr[i]);
  }
```
#### ¿Muestran la misma información el primer y el segundo bucle?
#### ¿Cuál es la diferencia entre los mismos?
#### ¿Existe diferencia entre ++i e i++?
#### ¿Qué muestra el siguiente código: "arr.forEach(function(i){console.log(i)});"?
#### ¿Y el siguiente?
```
for (i of arr) {
  console.log(i);
 }
```
#### ¿Hay diferencia con el siguiente?
```
for (i in arr){
   console.log(i)
 }
```

### Actividad 7. Realiza un programa en JavaScript que calcule el área y el perímetro de una circunferencia de radio 5 m. A continuación, modifica dicho código para que el usuario pueda introducir el radio. Recuerda que para seleccionar un elemento desde HTML debes usar la instancia document.getElementById("")

### Actividad 8. JavaScript puede manejar los eventos de una página web para conocer, por ejemplo, cuando el ratón pasa sobre un elemento. Aquí tienes un código que sirve de ejemplo para los siguientes eventos: onmouseover, onmouseout, onblur. Cópialo y ejecútalo para analizar su función:
```
<h1>Ejemplo de Eventos onmouseover, onmouseout y onblur.</h1>
    <div id="miDiv" onmouseover="mostrarMensaje('Mouse sobre el div')" onmouseout="mostrarMensaje('Mouse fuera del div')">
      <p>¡Pasa el mouse sobre este div!</p>
        
      <input type="text" onblur="mostrarMensaje('El campo de texto ha perdido el foco')" placeholder="Escribe algo y luego haz clic fuera">
    </div>
    <p id="mensaje"></p>

    <script>
    function mostrarMensaje(mensaje) {
      document.getElementById('mensaje').innerHTML = mensaje;
    }
    </script>
```

### Actividad 9. Crea una página HTML que permita al usuario calcular una propina según el total de la factura a pagar. Esta web debe permitir al usuario introducir el monto total de la factura; seleccionar un porcentaje de propina a pagar (10, 15 0 20%) y obtener en pantalla el valor de la propina.

### Actividad 10. Observa y analiza la función del siguiente código. A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.
```
<!DOCTYPE html>
<html>
<head>
    <title>Rombo de emoticonos</title>
</head>
<body>

    <div id="rombo" style="text-align: center"></div>
    
    <script>
            function dibujarRombo(filas) {
                
                let output = '';
                
                //Parte creciente del rombo:
                for (let i = 1; i <= filas; i++){
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                
                //Parte decreciente del rombo:
                for (let i = filas - 1; i >= 1; i--) {
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                document.getElementById('rombo').innerHTML = output;
            }
            dibujarRombo(15); //Ejecutamos la función.    
    </script>
</body>
</html>
```
