const divProductos = document.getElementById("divProductos")

fetch('./json/productos.json')
.then(promise => promise.json())
.then(data => {
    data.forEach(producto => {
      divProductos.innerHTML += ` 
     <div class="card h-100">
      <img src="./img/${producto.img}" class="card-img-top" alt="${producto.id}">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.marca}</p>
      <p class="card-text">${producto.precio}</p>
      <p class="card-text">${producto.stock}</p>
      <button class="btn btn-dark" id="boton${producto.id}">Comprar</button>
    </div>
    </div>`
    });
})

async function obtenerProductos() {
    const datos = await fetch('./json/productos.json')
    const datosConv = await datos.json()
    return datosConv
}

const array = obtenerProductos()

array.then(data => console.log(data))
    


/*
*/

class Articulo {
  constructor (producto, precio, stock) {
      this.producto = producto;
      this.precio = precio;
      this.stock = stock;
  }
}

//Declaracion
let base_datos = [];

//Consulta y creacion de localStorage
if(localStorage.getItem('base_datos_articulos')){
  base_datos = JSON.parse(localStorage.getItem('base_datos_articulos'))
}
else {
  localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))
}

const boton = document.getElementById('formulario_carga')
const div_producto = document.getElementById('productos')

//formulario
boton.addEventListener ('submit', (e) => {  

  e.preventDefault()      

  let nombre_art = document.getElementById('nombre_producto').value;
  let precio_art = parseFloat(document.getElementById('precio_producto').value);
  let stock_art = parseInt(document.getElementById('stock_producto').value);

  const producto1 = new Articulo (nombre_art, precio_art, stock_art);

  base_datos.push(producto1)

  localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))
  

  div_producto.innerHTML = " "

  formulario_carga.reset()
 

  base_datos.forEach((producto,indice) => {
      div_producto.innerHTML +=  
       `<div class="div_articulo" id="producto${indice}">
            <h2>${producto.producto}</h2>
            <p>Precio:$ ${producto.precio}</p>
            <p>Stock: ${producto.stock} Unidades</p>
            <input type="button" value="Eliminar" id="eliminar">
        </div>`
  })

  base_datos.forEach((producto, indice) => {
    Swal.fire({
      titleText: "Producto Agregado",
      Text: "Producto Agregado",
      icon: "success",
      confirmButtonText: "Ok!",
    });
          document.getElementById(`producto${indice}`).lastElementChild.addEventListener('click', () => {
          document.getElementById(`producto${indice}`).remove()
          Swal.fire({
            titleText: "Producto Eliminado",
            Text: "Producto Eliminado",
            icon: "success",
            confirmButtonText: "Ok!",
          });
          base_datos.splice(indice, 1)
          localStorage.setItem('base_datos_articulos', JSON.stringify(base_datos))
          
          
      })
  })
})





/*
class Producto {
  constructor(nombre, marca, precio, stock) {
    this.nombre = nombre
    this.marca = marca
    this.precio = precio
    this.stock = stock
  }
}

const productos = []
const form = document.querySelector('#idForm')
const divProductos = document.querySelector('#divProductos')

form.addEventListener('submit', (e) => {
    let nombre = document.getElementById('idNombre').value
    let marca = document.getElementById('idMarca').value
    let precio = parseFloat(document.getElementById('idPrecio').value)
    let stock = parseInt(document.getElementById('idStock').value)
    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
    console.log(productos)
    form.reset()
})
document.querySelector('#botonProductos').addEventListener('click', () => {
    productos.forEach(producto => {
        divProductos.innerHTML += `
            <div class="card" style="width: 18rem;margin:3px;">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">${producto.precio}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })
})


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

*/



