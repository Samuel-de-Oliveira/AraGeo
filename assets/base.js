/* base.js
 *
 * Here works the main algorithm of
 * Solids recognition.
 *
 */

// TODO: Create a english version soon 

import * as solids from "./solids.js";
import * as tools from "./tools.js";

// HACK: Testando funções
console.log(solids.renderCube());
console.log(solids.renderSphere());
console.log(solids.renderCilinder());


// Version formater
document.getElementById("version").innerHTML = `
  Version: ${tools.ARAGEO_VERSION}
`;

// Get polyhedron info
const params = new URLSearchParams(window.location.search);
const solid = params.get("solid");
const aresta = Number(params.get("aresta"));

// Title set
if (solid) {
  document.getElementById("solid-name").innerHTML = solid;
} else {
  document.getElementById("solid-name").innerHTML = "Sem nome!";
}

// Polyhedron Information
if (solid && aresta) {
  // TODO: Create a function for each polyhedron
  // Pega a tag main e criar uma lsta com informações
  const container = document.getElementById("solid-info");
  const ul = document.createElement("ul");

  // Arestas 
  const liArestas = document.createElement("li");
  liArestas.innerHTML = `Tamanho das Arestas: ${aresta} <i>cm</i>`;
  ul.appendChild(liArestas);
  
  container.appendChild(ul); // Adiciona li's
} else {
  // TODO: Use a createElement() system
  document.getElementById("solid-info").innerHTML = `
    <b>Estamos sem informações suficientes sobre o sólido</b>
  `;
}
