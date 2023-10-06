"use strict";

import { Producto } from "../clases/Producto.js";

export const crearMapProducto = (productoJson) => {
  const mapProducto = new Map();

  productoJson.forEach((element) => {
    const producto = parsearProducto(element);
    mapProducto.set(producto.nombre, producto);
  });

  return mapProducto;
};

const parsearProducto = (productosJson) => {
  return new Producto(
    productosJson["nombre"],
    productosJson["precio"],
    productosJson["stock"],
    productosJson["peso"],
    productosJson["perecible"],
    productosJson["volumen"]
  );
};
