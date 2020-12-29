const db = require("./db");
const Auto = require('./entidades/auto');
const Moto = require('./entidades/moto');
const Vehiculo = require("./entidades/vehiculo");


//CREACIÓN DE VEHÍCULOS
function crearVehiculos(){
    let vehiculos = [];
    for (let i = 0; i < db.length; i++) {
        switch (db[i].Tipo) {
            case "Auto":
                vehiculos[i] = new Auto(db[i].Marca, db[i].Modelo, db[i].Puertas, db[i].Precio,)
                break;
            case "Moto":
                vehiculos[i] = new Moto(db[i].Marca, db[i].Modelo, db[i].Cilindrada, db[i].Precio,)
                break;
            default:
                vehiculos[i] = new Vehiculo(db[i].Marca, db[i].Modelo, db[i].Precio,)
                break;
        }
    }
    return vehiculos
}

//MOSTRAR AUTOS
function mostrarVehiculos(vehiculos) {
    for (let i = 0; i < vehiculos.length; i++) {
        console.log(vehiculos[i].obtenerCaracteristicas().join(" // "));
    }

}
//ORDENAR VEHICULOS POR PRECIO DE MIN A MAX
function ordenarVehiculos(vehiculos){
    vehiculos.sort(function(a, b){return a.Precio - b.Precio});
    return vehiculos
}

//MOSTRAR PRECIOS MIN Y MAX
function getMinMaxPrices(vehiculos) {
    let minMax = {"min": vehiculos[0], "max": vehiculos[vehiculos.length -1]};
    console.log(`El auto más caro: ${minMax.max.Marca} ${minMax.max.Modelo}`);
    console.log(`El auto más barato: ${minMax.min.Marca} ${minMax.min.Modelo}`);
}

//BUSCAR MODELO QUE CONTIENE LETRA Y
function searchLetter(vehiculos) {
    for (let i = 0; i < vehiculos.length; i++) {
        
        if(vehiculos[i].Modelo.includes("Y")){
            let vehiculo = vehiculos[i]
            console.log(`Vehículo que contiene en el modelo la letra 'Y': ${vehiculo.Marca} ${vehiculo.Modelo} $${vehiculo.formatearPrecio()}`);
        }
        
    }
}

//MOSTRAR MODELOS ORDENADOS POR PRECIO MAYOR A MENOR
function orderByPriceFromBigger(vehiculos){
    console.log(`Vehículos ordenados por precio de mayor a menor:`)
    for (let i = vehiculos.length - 1; i >= 0; i--) {
        console.log(`${vehiculos[i].Marca} ${vehiculos[i].Modelo}`);
    }
}

//SEPARADOR
function separator() {
    console.log("=========================================");
}


//LLAMADO DE FUNCIONES
const vehiculosdb  = crearVehiculos();
mostrarVehiculos(vehiculosdb);
separator();
ordenarVehiculos(vehiculosdb);
getMinMaxPrices(vehiculosdb);
searchLetter(vehiculosdb);
separator();
orderByPriceFromBigger(vehiculosdb);