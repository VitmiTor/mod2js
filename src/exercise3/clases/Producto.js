"use strict";

export class Producto {
  #nombre;
  #precio;
  #stock;
  #peso;
  #perecible;
  #volumen;

  constructor(nombre, precio, stock, peso, perecible, volumen) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
    this.#peso = peso;
    this.#perecible = perecible;
    this.#volumen = volumen;
  }

  static crearArray = (productosJson) => {
    const productosArray = [];
    productosJson.forEach((element) => {
      productosArray.push(this.parsearProducto(element));
    });
    return productosArray;
  };

  static parsearProducto = (productosJson) => {
    return new this(
      productosJson["nombre"],
      productosJson["precio"],
      productosJson["stock"],
      productosJson["peso"],
      productosJson["perecible"],
      productosJson["volumen"]
    );
  };

  static crearMap = (arrayProductos) => {
    const mapProducto = new Map();

    arrayProductos.forEach((producto) => {
      mapProducto.set(producto.nombre, producto);
    });

    return mapProducto;
  };

  mostrarInformacion() {
    console.log(`${this.#nombre}`);
    console.log(`${this.#precio}`);
    console.log(`${this.#stock}`);
    console.log(`${this.#peso}`);
    console.log(`${this.#perecible}`);
    console.log(`${this.#volumen}`);
  }

  get nombre() {
    return this.#nombre;
  }
}
