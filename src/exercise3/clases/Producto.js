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

  get stock() {
    return this.#stock;
  }

  get precio() {
    return this.#precio;
  }
}
