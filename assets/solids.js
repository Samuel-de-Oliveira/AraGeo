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
    <li><b>Quantidade de Faces:</b> 6</li>
    <li><b>É um sólido de Platão.</b></li>
  </ul>
  `;
}

export function renderCylinder(Solid) {
  const baseArea = (Number(Solid.radius) ** 2) * Math.PI;
  const sideArea = Number(Solid.radius) * 2 * Math.PI * Number(Solid.height); 
  const realVolume = baseArea * Number(Solid.height);
  const realArea = 2 * baseArea + sideArea;

  return `
  <ul>
    <li><b>Raio da Base:</b> ${Solid.radius} <i>cm</i></li>
    <li><b>Altura do Cilindro:</b> ${Solid.height} <i>cm</i></li>
    <li><b>Formula do Volume:</b> π r²h</li>
    <li><b>Formula da Área:</b> 2 π r² + 2 π rh</li>
    <li><b>Volume real do sólido:</b> ${realVolume.toFixed(3)} <i>cm³</i></li>
    <li><b>Área real do Sólido:</b> ${realArea.toFixed(3)} <i>cm²</i></li>
    <li><b>Quantidade de faces:</b> 3</li>
  </ul>
  `;
} 

// TODO: Tetrahedron
export function renderRegularTetrahedron(Solid) {
  return `Sólido: ${Solid.solid}`;
}

export function renderRegularDodecahedron(Solid) {
  //TODO: buscar mais informações importentes
  return `
  <ul>
    <li><b>Tamanho do lado do dodecaedro:</b> ${Solid.side}</li>
    <li><b>Quantidade de faces:</b> 12</li>
    <li><b>É um sólido de platão.</b></li>
  <ul>
  `;
}

// TODO: Sphere
export function renderSphere(Solid) {
  return `Sólido: ${Solid.solid}`;
}
