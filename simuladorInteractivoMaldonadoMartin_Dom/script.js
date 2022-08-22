const infoMundiales = [
  {id:1, nombre: "Mundial de Qatar", año: 2022, img:"qatar.jpg", continente: "Africa"},
  {id:2, nombre: "Mundial de Rusia", año: 2018, img:"rusia.jpg", continente: "Europa"},
  {id:3, nombre: "Mundial de brasil", año: 2014, img:"brasil.jpg", continente: "America"},
]

const textoDiv = document.getElementById("caja").innerHTML;
console.log(textoDiv);

document.getElementById("caja").innerHTML += "<h2>Paises</h2>";


const info = document.getElementById("info");

info.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
console.log(info);

infoMundiales.forEach(mundiales =>{
  

  const row = document.createElement(`div`);
  row.classList.add("col");
  row.innerHTML = `
  <div class="card h-100">
    <img src="img/${mundiales.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${mundiales.nombre}</h5>
    <p class="card-text">${mundiales.año}</p>
    <p class="card-text">${mundiales.continente}</p>
   </div>
  `

  info.appendChild(row);
});



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





