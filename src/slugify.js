/**
 * Convierte un título en un slug de URL: "Árbol de Navidad" → "arbol-de-navidad".
 *
 * - Elimina las tildes y diacríticos (la ñ pasa a n).
 * - Cualquier secuencia de caracteres que no sean letras a-z o dígitos se convierte en un solo guion.
 * - El resultado nunca empieza ni termina con guion.
 */
export function slugify(title) {
  return String(title)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
