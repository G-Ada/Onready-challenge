const Vehiculo = require("./vehiculo")

class Auto extends Vehiculo {
    constructor(Marca, Modelo, Puertas, Precio) {
        super(Marca, Modelo, Precio);
        this.Puertas = Puertas;
    }


    obtenerCaracteristicas(){
        let precioFormateado = super.formatearPrecio();
        let info = [`Marca: ${this.Marca}`, `Modelo: ${this.Modelo}`, `Puertas: ${this.Puertas}`, `Precio: $${precioFormateado}`]
        return info;
    }
}

module.exports = Auto;