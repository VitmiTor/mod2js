"use strict";
export class Videojuegos {
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

  static crearArray = (videojuegosJson) => {
    const videojuegosArray = [];
    videojuegosJson.forEach((element) => {
      videojuegosArray.push(this.parsearVideojuegos(element));
    });
    return videojuegosArray;
  };

  static parsearVideojuegos = (videojuegosJson) => {
    return new this(
      videojuegosJson["nombre"],
      videojuegosJson["epoca"],
      videojuegosJson["precio"],
      videojuegosJson["duracion"],
      videojuegosJson["genero"],
      videojuegosJson["empresa"]
    );
  };

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
