"use strict";
import { Videojuegos } from "../clases/Videojuegos.js";
import {
  ordenarAlfabeticamente,
  ordenarEmpresaArray,
} from "../funciones/VideojuegosParser.js";
import videojuegosJson from "../jsons/ex2/videojuegos.json" assert { type: "json" };

const videojuegosArray = Videojuegos.crearArray(videojuegosJson);
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
