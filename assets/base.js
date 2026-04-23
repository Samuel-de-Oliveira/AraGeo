/* base.js
 *
 * Here works the main algorithm of
 * Solids recognition.
 *
 */

// TODO: Create a english version soon 

import * as solids from "./solids.js";
import * as tools from "./tools.js";

// Version formater
document.getElementById("version").innerHTML = `
  Versão da Base: ${tools.ARAGEO_VERSION}
`;

// Get polyhedron info
const params = new URLSearchParams(window.location.search);
const solidObject = Object.fromEntries(params);

console.log(solidObject); // Verify polyhedron Parameters

// Title set
if (solidObject.solid) {
  document.getElementById("solid-name").innerHTML = solidObject.solid;
} else {
  document.getElementById("solid-name").innerHTML = "Sem nome!";
}

// Polyhedron Information
if (solidObject.solid) {
  // Show polyhedron info
  // TODO: Create a Error threat system for this to avoid critical errors
  document.getElementById("solid-info").innerHTML = solids[
    tools.SYSTEM_DATA.solids[solidObject.solid]
  ](solidObject);
} else {
  // In case theres is no Seach Params
  document.getElementById("solid-info").innerHTML = `
    <b>Estamos sem informações suficientes sobre o sólido!!!</b><br>
    <b>ERROR: O sistema de Seach Parameters está sem parametros!!!</b>
  `;
}
