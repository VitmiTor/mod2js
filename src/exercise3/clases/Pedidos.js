"use strict";

export class Pedidos {
  #nombre;
  #efectivo;
  #dineroAbonado;

  constructor(nombre, efectivo, dineroAbonado) {
    this.#nombre = nombre;
    this.#efectivo = efectivo;
    this.#dineroAbonado = dineroAbonado;
  }

  static crearArray = (pedidoJson) => {
    const arrayPedidos = [];
    pedidoJson.forEach((element) => {
      arrayPedidos.push(this.parsearPedido(element));
    });
    return arrayPedidos;
  };

  static parsearPedido = (pedidoJson) => {
    return new this(
      pedidoJson["nombre"],
      pedidoJson["efectivo"],
      pedidoJson["dineroAbonado"]
    );
  };

  mostrarInformacion = () => {
    console.log(`${this.#nombre}`);
    console.log(`${this.#efectivo}`);
    console.log(`${this.#dineroAbonado}`);
  };
  get nombre() {
    return this.#nombre;
  }
}
