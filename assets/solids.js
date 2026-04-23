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
    <li><b>É um sólido de Platão.</b></li>
  </ul>
  `;
}

// TODO: Cilinder
export function renderCylinder(Solid) {
  return `
  <ul>
    <li><b>Raio da Base:</b> ${Solid.radius} <i>cm</i></li>
    <li><b>Altura do Cilindro:</b> ${Solid.height} <i>cm</i></li>
  </ul>
  `;
} 

// TODO: Tetrahedron
export function renderRegularTetrahedron(Solid) {
  return `Sólido: ${Solid.solid}`;
}

// TODO: Dodecahedron
export function renderRegularDodecahedron(Solid) {
  return `Sólido: ${Solid.solid}`;
}

// TODO: Sphere
export function renderSphere(Solid) {
  return `Sólido: ${Solid.solid}`;
}
