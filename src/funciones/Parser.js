export const ordenarGeneroArray = (
  peliculaArray,
  peliculaTerror,
  peliculaComedia,
  peliculaAccion
) => {
  peliculaArray.forEach((pelicula) => {
    switch (pelicula.genero) {
      case "TERROR":
        peliculaTerror.push(pelicula);
        break;
      case "COMEDIA":
        peliculaComedia.push(pelicula);
        break;
      case "ACCION":
        peliculaAccion.push(pelicula);
        break;
    }
  });
};

export const ordenarEmpresaArray = (
  videojuegosArray,
  nintendoArray,
  xboxArray,
  playStationArray
) => {
  videojuegosArray.forEach((juego) => {
    switch (juego.empresa) {
      case "XBOX":
        xboxArray.push(juego);
        break;
      case "NINTENDO":
        nintendoArray.push(juego);
        break;
      case "PLAY STATION":
        playStationArray.push(juego);
        break;
    }
  });
};

export const ordenarDuracionArray = (peliculas) => {
  for (let i = 0; i < peliculas.length; i++) {
    for (let j = 0; j < peliculas.length - i - 1; j++) {
      if (peliculas[j].duracion > peliculas[j + 1].duracion) {
        const temp = peliculas[j];
        peliculas[j] = peliculas[j + 1];
        peliculas[j + 1] = temp;
      }
    }
  }
};

export const ordenarAlfabeticamente = (nombreArray) => {
  for (let i = 0; i < nombreArray.length; i++) {
    for (let j = 0; j < nombreArray.length - i - 1; j++) {
      if (nombreArray[j].nombre.localeCompare(nombreArray[j + 1].nombre) > 0) {
        const temp = nombreArray[j];
        nombreArray[j] = nombreArray[j + 1];
        nombreArray[j + 1] = temp;
      }
    }
  }
};
