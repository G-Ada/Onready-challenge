const Vehiculo = require('./vehiculo');

class Moto extends Vehiculo {
    constructor(Marca, Modelo, Cilindrada, Precio) {
        super(Marca, Modelo, Precio);
        this.Cilindrada = Cilindrada;
    }

    formatearPrecio(){
        return super.formatearPrecio()
    }

    obtenerCaracteristicas(){
        let precioFormateado = super.formatearPrecio();
        let info = [`Marca: ${this.Marca}`, `Modelo: ${this.Modelo}`, `Cilindrada: ${this.Cilindrada}`, `Precio: $${precioFormateado}`]
        return info;
    }
}

module.exports = Moto;