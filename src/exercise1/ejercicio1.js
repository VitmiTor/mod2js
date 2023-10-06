"use strict";
import peliculasJson from "../exercise1/jsons/peliculas.json" assert { type: "json" };
import { crearArrayPelicula } from "./parser/PeliculasParser.js";
import { ordenarDuracionArray, ordenarGeneroArray } from "./functions.js";

const peliculaArray = crearArrayPelicula(peliculasJson);
const peliculaTerror = [];
const peliculaAccion = [];
const peliculaComedia = [];

ordenarGeneroArray(
  peliculaArray,
  peliculaTerror,
  peliculaComedia,
  peliculaAccion
);

ordenarDuracionArray(peliculaTerror);
ordenarDuracionArray(peliculaComedia);
ordenarDuracionArray(peliculaAccion);

peliculaTerror.forEach((element) => {
  element.mostrarInformacion();
});

peliculaComedia.forEach((element) => {
  element.mostrarInformacion();
});

peliculaAccion.forEach((element) => {
  element.mostrarInformacion();
});
