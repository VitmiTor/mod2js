"use strict";
import productosJson from "./jsons/productos.json" assert { type: "json" };
import pedidosJson from "./jsons/pedido.json" assert { type: "json" };
import { crearMapProducto } from "./parser/productosParser.js";

const productoMap = crearMapProducto(productosJson);

const imprimirData = () => {
  console.log(pedidosJson["nombre"]);
};

const imprimirInfoProducto = () => {
  const arrayPedido = pedidosJson["listaProductos"];
  let precioAcumulado = 0;
  arrayPedido.forEach((element) => {
    const nombre = element["nombre"];
    const cantidad = element["cantidad"];

    console.log(`Producto: ${nombre}`);
    const producto = productoMap.get(nombre);
    if (cantidad <= producto.stock) {
      console.log(`precio unitario: ${producto.precio}`);
      console.log(`cantidad: ${cantidad}`);

      const precioTotal = cantidad * producto.precio;

      console.log(`precio Total: ${precioTotal}`);

      precioAcumulado += precioTotal;
    } else {
      console.log("NO HAY STOCK DISPONIBLE");
    }

    console.log("=============================");
  });
  if (pedidosJson["efectivo"]) {
    console.log("ha pagado en efectivo");
  } else {
    console.log("no ha pagado en efectivo");
  }
  const pago = pedidosJson["dineroAbonado"];
  if (pago >= precioAcumulado) {
    const vuelto = pago - precioAcumulado;
    console.log(`el vuelto es: ${vuelto}`);
  } else {
    const falta = precioAcumulado - pago;
    console.log(`debe: ${falta}`);
  }
};

imprimirInfoProducto();
