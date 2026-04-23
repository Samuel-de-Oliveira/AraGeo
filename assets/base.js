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

// HACK: Testando funções
console.log(solidObject);
console.log(solids.renderCube(solidObject));
console.log(solids.renderSphere(solidObject));
console.log(solids.renderCilinder(solidObject));

// Title set
if (solidObject.solid) {
  document.getElementById("solid-name").innerHTML = solidObject.solid;
} else {
  document.getElementById("solid-name").innerHTML = "Sem nome!";
}

// Polyhedron Information
if (solidObject) {
  // TODO: Criar uma base de dados com JSON
  if (solidObject.solid == "Cubo") {
    document.getElementById("solid-info").innerHTML = solids.renderCube(solidObject);
  } else {
    document.getElementById("solid-info").innerHTML = `
      <b>Este sólido não está na base de dados!!!</b>
    `
  }
} else {
  // TODO: Use a createElement() system
  document.getElementById("solid-info").innerHTML = `
    <b>Estamos sem informações suficientes sobre o sólido!!!</b>
  `;
}
