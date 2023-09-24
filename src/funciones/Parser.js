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
