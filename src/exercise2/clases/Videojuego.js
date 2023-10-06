"use strict";
export class Videojuego {
  #nombre;
  #epoca;
  #precio;
  #duracion;
  #genero;
  #empresa;

  constructor(nombre, epoca, precio, duracion, genero, empresa) {
    this.#nombre = nombre;
    this.#epoca = epoca;
    this.#precio = precio;
    this.#duracion = duracion;
    this.#genero = genero;
    this.#empresa = empresa;
  }

  mostrarInformacion() {
    console.log(`${this.#nombre}`);
    console.log(`${this.#epoca}`);
    console.log(`${this.#precio}`);
    console.log(`${this.#duracion}`);
    console.log(`${this.#genero}`);
    console.log(`${this.#empresa}`);
    console.log(`---------------`);
  }

  get nombre() {
    return this.#nombre;
  }
  get empresa() {
    return this.#empresa;
  }
}
