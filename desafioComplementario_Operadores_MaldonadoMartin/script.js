// Los mundiales de futbol se realizan cada 4 años desde el año 1930 hasta la actualidad

let numero

do{
    numero = parseInt(prompt("Ingrese un año entre el 1930 y 2022 para determinar si hubo Mundial de futbol"))
}   
    while (isNaN(numero))

        if (numero >= 1930 && numero <= 2022){
            if(numero % 4 == 2){
                console.log("Si hubo mundial ese año");
            }
            else{
                console.log("No hubo mundial ese año");
            }        
        }
        else{
            console.log("Este año no corresponde al rango");
        }


//Uso de operador avanzado
let huboMundial = (numero % 4 == 2) ? "Si hubo mundial ese año" : "No hubo mundial ese año" 
console.log(huboMundial)