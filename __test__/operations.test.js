// importar las funciones de operations.js
import { sumar, restar, multiplicar, division } from "../helper/operations";

test("Suma", () => {
  // vamos a usar la funcion expect llamar al funcion sumar pasarle 2 parametros y
  // y esperar un resultado
  expect(sumar(1, 3)).toBe(5);
});

test("Resta", () => {
  expect(restar(4, 2)).toBe(2);
});

test("Multplicar", () => {
  expect(multiplicar(3, 6)).toBe(18);
});

test("Division", () => {
  expect(division(20, 5)).toBe(4);
});
