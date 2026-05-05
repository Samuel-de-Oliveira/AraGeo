/* Solids.js
 *
 *  This is the modules that keep all
 *  the solids fuction that will be shown
 *  to the "solid-info" tag
 *
 */

import * as translation from "./translations.js";

export function renderCube(Solid) {
  const realVolume = Number(Solid.side) ** 3;
  const realArea = (Number(Solid.side) ** 2) * 6;

  return `
  <p id="definition">
    <b>${translation.translate["definition"]}</b> Poliédro de 6 faces quadradas, onde
    cada um dos seus vértices tem o mesmo tamanho e cada face
    a mesma área.
  </p>

  <ul>
    <li><b>${translation.translate["side_value"]}</b> ${Solid.side.replace(/\./g, ",")} <i>cm</i>;</li>
    <li><b>${translation.translate["volume_formula"]}</b> \\( l^{3} \\);</li>
    <li><b>${translation.translate["area_formula"]}</b> \\( 6l^{2} \\);</li>
    <li><b>${translation.translate["volume"]}</b> ${realVolume.toFixed(2).replace(/\./g, ",")} <i>cm³;</i></li>
    <li><b>${translation.translate["area"]}</b> ${realArea.toFixed(2).replace(/\./g, ",")} <i>cm²</i>;</li>
    <li><b>${translation.translate["faces"]}</b> 6;</li>
    <li><b>${translation.translate["edges"]}</b> 12;</li>
    <li><b>${translation.translate["vertex"]}</b> 8;</li>
    <li><b>${translation.translate["platon"]}</b></li>
  </ul>
  `;
}

export function renderCylinder(Solid) {
  const baseArea = (Number(Solid.radius) ** 2) * Math.PI;
  const sideArea = Number(Solid.radius) * 2 * Math.PI * Number(Solid.height); 
  const realVolume = baseArea * Number(Solid.height);
  const realArea = 2 * baseArea + sideArea;

  return `
  <p id="definition">
    <b>${translation.translate["definition"]}</b> Poliédro de tipo prisma que possui
    uma base que é circular.
  </p>

  <ul>
    <li><b>Raio da Base:</b> ${Solid.radius} <i>cm</i>;</li>
    <li><b>Altura do Cilindro:</b> ${Solid.height} <i>cm</i>;</li>
    <li><b>${translation.translate["volume_formula"]}</b> \\( \\pi r^{2} h \\);</li>
    <li><b>${translation.translate["area_formula"]}</b> \\( 2 \\pi r^{2} + 2 \\pi r h \\);</li>
    <li><b>${translation.translate["volume"]}</b> ${realVolume.toFixed(2).replace(/\./g, ",")} <i>cm³</i>;</li>
    <li><b>${translation.translate["area"]}</b> ${realArea.toFixed(2).replace(/\./g, ",")} <i>cm²</i>;</li>
    <li><b>${translation.translate["faces"]}</b> 3;</li>
    <li><b>${translation.translate["edges"]}</b> 3;</li>
    <li><b>${translation.translate["vertex"]}</b> 0.</li>
  </ul>
  `;
} 

// TODO: Tetrahedron
export function renderRegularTetrahedron(Solid) {
  const realVolume = Number(Solid.side) * 2;

  return `
  <ul>
    <li><b>${translation.translate["side_value"]}</b> ${Solid.side.replace(/\./g, ",")};</li>
    <li><b>${translation.translate["platon"]}</b></li>
  </ul>
  `;
}

export function renderRegularDodecahedron(Solid) {
  return `
  <p id="definition">
    <b>${translation.translate["definition"]}</b> Poliédro de 12 faces onde cada
    face é um pentágono regular.
  </p>

  <ul>
    <li><b>${translation.translate["side_value"]}</b> ${Solid.side.replace(/\./g, ",")} <i>cm</i>;</li>
    <li><b>${translation.translate["faces"]}</b> 12;</li>
    <li><b>${translation.translate["edges"]}</b> 30;</li>
    <li><b>${translation.translate["vertex"]}</b> 20;</li>
    <li><b>${translation.translate["platon"]}</b></li>
  <ul>
  `;
}

export function renderSphere(Solid) {
  const realVolume = 4/3 * Math.PI * (Number(Solid.radius) ** 3);
  const realArea = 4 * Math.PI * (Number(Solid.radius) ** 2);

  return `
   <p id="definition">
       <b>${translation.translate["definition"]}</b> É um poliedro liso, tal que existe um conjunto
       de todos os pontos do espaço que estão fixos pela mesma distância
       de um certo raio.
   </p>

   <ul>
     <li><b>Raio real da esfera:</b> ${Solid.radius} <i>cm</i>;</li>
     <li><b>${translation.translate["volume_formula"]}</b> \\( 4/3 \\cdot \\pi r^{3} \\);</li>
     <li><b>${translation.translate["area_formula"]}</b> \\( 4 \\pi r^{2} \\);</li>
     <li><b>${translation.translate["volume"]}</b> ${realVolume.toFixed(3)} <i>cm³</i>;</li>
     <li><b>${translation.translate["area"]}</b> ${realArea.toFixed(3)} <i>cm²</i>;</li>
     <li><b>Não possui face, aresta e nem vertice</b>;</li>
     <li><b>Mas se considera que tenha uma surperficie curva.</b></li>
   </ul>
  `;
}

// TODO: Cobblestone
export function renderCoblestone(Solid) {
  return `
    <p>
      <b>${translation.translate["definition"]}</b>
    </p> 

    <ul>
    </ul>
  `;
}
