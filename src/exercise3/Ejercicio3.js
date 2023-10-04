"use strict";
import productosJson from "../jsons/ex3/productos.json" assert { type: "json" };
import pedidosJson from "../jsons/ex3/pedido.json" assert { type: "json" };
import { Producto } from "../clases/Producto.js";
import { Pedidos } from "./clases/Pedidos.js";

const arrayProductos = Producto.crearArray(productosJson);
const mapProductos = Producto.crearMap(arrayProductos);

// const producto1 = mapProductos.get("SALMON");
// producto1.mostrarInformacion();

const arrayPedidos = Pedidos.crearArray(pedidosJson);
// // const array1 = arrayPedidos[0];
console.log(arrayPedidos);

//console.log(mapProductos);

//producto1.mostrarInformacion();
