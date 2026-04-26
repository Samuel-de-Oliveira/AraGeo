/* base.js
 *
 * Here works the main algorithm of
 * Solids recognition.
 *
 */

import * as solids from "./solids.js";
import * as tools from "./tools.js";
import * as translation from "./translations.js";

//// Language system ////
// TODO: FIx this language system
const lang = navigator.language;
var translate = {};

if (["en", "en-us"].includes(lang.toLowerCase())) {
  translate = translation["EN"]; // English
} else if (["fr", "fr-fr"].includes(lang.toLowerCase())) {
  translate = translation["FR"]; // Français
} else if (["pt", "pt-br", "pt-pt"].includes(lang.toLowerCase())) {
  translate = translation["PT_BR"]; // Português
} else {
  translate = translation["EN"]; // In case of n translations avalible
}
////////////////////////

// Version formater
document.getElementById("version").innerHTML = `
  ${translate["version"]} ${tools.ARAGEO_VERSION}
`;
document.getElementById("credit").innerHTML = translate["credit"];

// Get polyhedron info
const params = new URLSearchParams(window.location.search);
const solidObject = Object.fromEntries(params);

console.log(solidObject); // Verify polyhedron Parameters

// Title set
if (solidObject.solid) {
  document.getElementById("solid-name").innerHTML = `
    ${translate["solid_name"]} ${solidObject.solid}
  `;
} else {
  document.getElementById("solid-name").innerHTML = "ERROR: Você esqueceu meu nome!!!";
}

// Polyhedron Information
if (solidObject.solid) {
  // Show polyhedron info
  try {
    document.getElementById("solid-info").innerHTML = solids[
      tools.SYSTEM_DATA.solids[solidObject.solid]
    ](solidObject);
  } catch(Err) {
    document.getElementById("solid-info").innerHTML = `
      <b>Estamos sem informações suficientes sobre o sólido!!!</b><br>
      <b>ERROR: ${Err.name}!!!</b>
    `;
  }
} else {
  // In case theres is no Seach Params
  document.getElementById("solid-info").innerHTML = `
    <b>Estamos sem informações suficientes sobre o sólido!!!</b><br>
    <b>ERROR: O sistema de Seach Parameters está sem parametros!!!</b>
  `;
}
