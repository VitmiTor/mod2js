export class Peliculas {
  #nombre;
  #epoca;
  #duracion;
  #genero;
  #precioTicket;

  constructor(nombre, epoca, duracion, genero, precioTicket) {
    this.#nombre = nombre;
    this.#epoca = epoca;
    this.#duracion = duracion;
    this.#genero = genero;
    this.#precioTicket = precioTicket;
  }

  static crearArray = (peliculasJson) => {
    const peliculasArray = [];
    peliculasJson.forEach((element) => {
      peliculasArray.push(this.parsearPeliculas(element));
    });
    return peliculasArray;
  };

  static parsearPeliculas = (peliculaJson) => {
    return new this(
      peliculaJson["nombre"],
      peliculaJson["epoca"],
      peliculaJson["duracion"],
      peliculaJson["genero"],
      peliculaJson["precioTicket"]
    );
  };

  mostrarInformacion = () => {
    console.log(`Pelicula: ${this.#nombre}`);
    console.log(`epoca: ${this.#epoca}`);
    console.log(`duracion: ${this.#duracion}`);
    console.log(`genero: ${this.#genero}`);
    console.log(`precioTicket: ${this.#precioTicket}`);
    console.log("-------");
  };

  get duracion() {
    return this.#duracion;
  }
  get genero() {
    return this.#genero;
  }
}
