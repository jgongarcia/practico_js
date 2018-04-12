
print = console.log;

function makeCafe(cafe,agua){
    var instrucciones = "instrucciones:";
    i = instrucciones;
    respuesta = prompt("desea colocar leche en el cafe?");
    if (respuesta == "si"){
        print("Ingrese el porcentaje de leche que desea:");
        respuesta= prompt("porcnetaje?");
    }
}

makeCafe(1,2);
console.log("edicion de cafe sexy");