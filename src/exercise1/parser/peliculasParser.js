"use strict";
import { Pelicula } from "../clases/Pelicula.js";

export const crearArray = (peliculasJson) => {
  const peliculasArray = [];
  peliculasJson.forEach((element) => {
    peliculasArray.push(parsearPeliculas(element));
  });
  return peliculasArray;
};

const parsearPeliculas = (peliculaJson) => {
  return new Pelicula(
    peliculaJson["nombre"],
    peliculaJson["epoca"],
    peliculaJson["duracion"],
    peliculaJson["genero"],
    peliculaJson["precioTicket"]
  );
};
