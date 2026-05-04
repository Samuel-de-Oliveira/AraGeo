/* Solids.js
 *
 *  This is the modules that keep all
 *  the solids fuction that will be shown
 *  to the "solid-info" tag
 *
 */

//// Language system ////
import * as translation from "./translations.js";

const lang = navigator.language;
var solid_translate = {};
var translate = {};

if (["en", "en-us"].includes(lang.toLowerCase())) {
  // English
  solid_translate = translation["SOLIDS_EN"];
  translate = translation["EN"];
} else if (["fr", "fr-fr"].includes(lang.toLowerCase())) {
  // Français
  solid_translate = translation["SOLIDS_FR"];
  translate = translation["FR"];
} else if (["pt", "pt-br", "pt-pt"].includes(lang.toLowerCase())) {
  // Português
  solid_translate = translation["SOLIDS_PT_BR"];
  translate = translation["PT_BR"];
} else {
  // In case of no translations avalible
  solid_translate = tranlation["SOLIDS_EN"];
  translate = translation["EN"];
}
////////////////////////



export function renderCube(Solid) {
  const realVolume = Number(Solid.side) ** 3;
  const realArea = (Number(Solid.side) ** 2) * 6;

  return `
  <p id="definition">
    <b>${translate["definition"]}</b> Poliédro de 6 faces quadradas, onde
    cada um dos seus vértices tem o mesmo tamanho e cada face
    a mesma área.
  </p>

  <ul>
    <li><b>${translate["side_value"]}</b> ${Solid.side} <i>cm</i>;</li>
    <li><b>${translate["volume_formula"]}</b> \\( l^{3} \\);</li>
    <li><b>${translate["area_formula"]}</b> \\( 6l^{2} \\);</li>
    <li><b>${translate["volume"]}</b> ${realVolume.toFixed(3)} <i>cm³;</i></li>
    <li><b>${translate["area"]}</b> ${realArea.toFixed(3)} <i>cm²</i>;</li>
    <li><b>${translate["faces"]}</b> 6;</li>
    <li><b>${translate["edges"]}</b> 12;</li>
    <li><b>${translate["vertex"]}</b> 8;</li>
    <li><b>${translate["platon"]}</b></li>
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
    <b>${translate["definition"]}/b> Poliédro de tipo prisma que possui
    uma base que é circular.
  </p>

  <ul>
    <li><b>Raio da Base:</b> ${Solid.radius} <i>cm</i>;</li>
    <li><b>Altura do Cilindro:</b> ${Solid.height} <i>cm</i>;</li>
    <li><b>${translate["formula_volume"]}</b> \\( \\pi r^{2} h \\);</li>
    <li><b>${translate["area_formula"]}</b> \\( 2 \\pi r^{2} + 2 \\pi r h \\);</li>
    <li><b>${translate["volume"]}</b> ${realVolume.toFixed(3)} <i>cm³</i>;</li>
    <li><b>${translate["area"]}</b> ${realArea.toFixed(3)} <i>cm²</i>;</li>
    <li><b>${translate["faces"]}</b> 3;</li>
    <li><b>${translate["edges"]}</b> 3;</li>
    <li><b>${translate["vertex"]}</b>.</li>
  </ul>
  `;
} 

// TODO: Tetrahedron
export function renderRegularTetrahedron(Solid) {
  const realVolume = Number(Solid.side) * 2;

  return `
  <ul>
    <li><b>${translate["side_value"]}</b> ${Solid.side};</li>
    <li><b>${translate["platon"]}</b></li>
  </ul>
  `;
}

export function renderRegularDodecahedron(Solid) {
  return `
  <p id="definition">
    <b>${translate["definition"]}</b> Poliédro de 12 faces onde cada
    face é um pentágono regular.
  </p>

  <ul>
    <li><b>${translate["side_value"]}</b> ${Solid.side} <i>cm</i>;</li>
    <li><b>${translate["faces"]}</b> 12;</li>
    <li><b>${translate["edges"]}</b> 30;</li>
    <li><b>${translate["vertex"]}</b> 20;</li>
    <li><b>${translate["platon"]}</b></li>
  <ul>
  `;
}

export function renderSphere(Solid) {
  const realVolume = 4/3 * Math.PI * (Number(Solid.radius) ** 3);
  const realArea = 4 * Math.PI * (Number(Solid.radius) ** 2);

  return `
   <ul>
     <p id="definition">
       <b>${translate["definition"]}</b> É um poliedro liso, tal que existe um conjunto
       de todos os pontos do espaço que estão fixos pela mesma distância
       de um certo raio.
     </p>

     <li><b>Raio real da esfera:</b> ${Solid.radius} <i>cm</i>;</li>
     <li><b>${translate["volume_formula"]}</b> \\( 4/3 \\cdot \\pi r^{3} \\);</li>
     <li><b>${translate["area_formula"]}</b> \\( 4 \\pi r^{2} \\);</li>
     <li><b>${translate["volume"]}</b> ${realVolume.toFixed(3)} <i>cm³</i>;</li>
     <li><b>${translate["area"]}</b> ${realArea.toFixed(3)} <i>cm²</i>;</li>
     <li><b>Não possui face, aresta e nem vertice</b>;</li>
     <li><b>Mas se considera que tenha uma surperficie curva.</b></li>
   </ul>
  `;
}
