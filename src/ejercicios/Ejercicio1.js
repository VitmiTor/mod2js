"use strict";
import { Peliculas } from "../clases/Peliculas.js";
import peliculasJson from "../jsons/ex1/peliculas.json" assert { type: "json" };
import {
  ordenarDuracionArray,
  ordenarGeneroArray,
} from "../funciones/PeliculasParser.js";

const peliculaArray = Peliculas.crearArray(peliculasJson);
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
