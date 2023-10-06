"use strict";

import { Videojuego } from "../clases/Videojuego.js";

export const crearArrayVideojuego = (videojuegosJson) => {
  const videojuegosArray = [];
  videojuegosJson.forEach((element) => {
    videojuegosArray.push(parsearVideojuegos(element));
  });
  return videojuegosArray;
};

const parsearVideojuegos = (videojuegosJson) => {
  return new Videojuego(
    videojuegosJson["nombre"],
    videojuegosJson["epoca"],
    videojuegosJson["precio"],
    videojuegosJson["duracion"],
    videojuegosJson["genero"],
    videojuegosJson["empresa"]
  );
};
