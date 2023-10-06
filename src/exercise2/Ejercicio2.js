"use strict";
import videojuegosJson from "../exercise2/jsons/videojuegos.json" assert { type: "json" };
import { crearArrayVideojuego } from "./parser/videojuegosParser.js";
import { ordenarAlfabeticamente, ordenarEmpresaArray } from "./functions.js";

const videojuegosArray = crearArrayVideojuego(videojuegosJson);
const nintendoArray = [];
const xboxArray = [];
const playStationArray = [];

ordenarEmpresaArray(
  videojuegosArray,
  nintendoArray,
  xboxArray,
  playStationArray
);

ordenarAlfabeticamente(nintendoArray);
ordenarAlfabeticamente(xboxArray);
ordenarAlfabeticamente(playStationArray);

nintendoArray.forEach((element) => {
  element.mostrarInformacion();
});

xboxArray.forEach((element) => {
  element.mostrarInformacion();
});

playStationArray.forEach((element) => {
  element.mostrarInformacion();
});
