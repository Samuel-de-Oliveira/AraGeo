/* Solids.js
 *
 *  This is the modules that keep all
 *  the solids fuction that will be shown
 *  to the "solid-info" tag
 *
 */

export function renderCube(Solid) {
  const realVolume = Number(Solid.aresta) ** 3;
  const realArea = (Number(Solid.aresta) ** 2) * 6;

  return `
  <ul>
    <li><b>Tamanho do lado do cubo:</b> ${Solid.aresta} <i>cm</i></li>
    <li><b>Formula do seu Volume:</b> l³ (Volume real)</li>
    <li><b>Formula do seu Área:</b> 6 * l²</li>
    <li><b>Volume real do sólido:</b> ${realVolume} <i>cm³</i></li>
    <li><b>Área real do sólido:</b> ${realArea} <i>cm²</i></li>
  </ul>
  `;
}

// TODO: Cilinder
export function renderCilinder(Solid) {
  return `Sólido: ${Solid.solid}`;
} 

// TODO: Sphere
export function renderSphere(Solid) {
  return `Sólido: ${Solid.solid}`;
}
