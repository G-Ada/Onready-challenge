class Vehiculo {
    constructor(Marca, Modelo, Precio) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Precio = Precio;
    }

    formatearPrecio(){
        let precioFormateado = new Intl.NumberFormat('es-AR', {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(this.Precio);
        return precioFormateado
    }

    obtenerCaracteristicas(){
        let precioFormateado = this.formatearPrecio();
        let info = [`Marca: ${this.Marca}`, `Modelo: ${this.Modelo}`, `Precio: $${precioFormateado}`]
        return info;
    }
}

module.exports = Vehiculo;