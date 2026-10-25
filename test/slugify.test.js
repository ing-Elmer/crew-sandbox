import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "../src/slugify.js";

test("lower-cases and joins words with dashes", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("elimina las tildes", () => {
  assert.equal(slugify("Árbol de Navidad"), "arbol-de-navidad");
  assert.equal(slugify("Canción íntima ÉXITO último"), "cancion-intima-exito-ultimo");
});

test("convierte la ñ en n", () => {
  assert.equal(slugify("Año de España"), "ano-de-espana");
  assert.equal(slugify("ÑANDÚ"), "nandu");
});

test("elimina la diéresis", () => {
  assert.equal(slugify("Pingüino"), "pinguino");
});

test("los separadores consecutivos producen un solo guion", () => {
  assert.equal(slugify("a -- b"), "a-b");
  assert.equal(slugify("a   b"), "a-b");
  assert.equal(slugify("a, b; c!? d"), "a-b-c-d");
});

test("no deja guiones al inicio ni al final", () => {
  assert.equal(slugify("  Hola mundo  "), "hola-mundo");
  assert.equal(slugify("-- Hola --"), "hola");
  assert.equal(slugify("¿Qué tal?"), "que-tal");
});

test("devuelve cadena vacía si no hay letras ni dígitos", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("---"), "");
  assert.equal(slugify("¡!"), "");
});

test("conserva los dígitos", () => {
  assert.equal(slugify("Top 10 de 2026"), "top-10-de-2026");
});
