"use strict";

import { vModelSelect } from "vue";

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
}
