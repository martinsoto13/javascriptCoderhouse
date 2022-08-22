const campeonesAmerica = [
  "brasil ",
  "argentina ",
  "uruguay "
];


const campeonesEuropa = [
  "Italia ",
  "Alemania ",
  "España ",
  "Francia "
];




// Los mundiales de futbol se realizan cada 4 años desde el año 1930 hasta la actualidad


function saludar(nombre) {
    alert("Hola " + nombre + ".. te voy a mostrar si hubo mundial en el año que elijas!!!");
  }
  
  function procesarEntradaUsuario(callback) {
    const nombre = prompt("Mundiales de futbol: Por favor ingresa tu nombre");
    callback(nombre);
  }
  
 procesarEntradaUsuario(saludar);

  
let numero

do{
    numero = parseInt(prompt("Ingrese un año entre el 1930 y 2022 para poder informar si hubo mundial de futbol"))
}   
    while (isNaN(numero))

        if (numero >= 1930 && numero <= 2022){
            if(numero % 4 == 2){
                console.log("Si hubo mundial ese año")
                alert("Si hubo mundial ese año" );
            }
            else{
                console.log("No hubo mundial ese año")
                alert("No hubo mundial ese año");
            }        
        }
        else{
            console.log("Este año no corresponde al rango")
            alert("Este año no corresponde al rango");
            
        }
alert("Gracias por elejirnos" );


if(campeonesAmerica.includes("brasil ")) {
  console.log("brasil es campeon del mundo"); //brasil  esta en el array
  } else {
    console.log("brasil no esta en la lista")
  }



