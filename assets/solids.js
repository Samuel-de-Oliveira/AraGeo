/* Solids.js
 *
 *  This is the modules that keep all
 *  the solids fuction that will be shown
 *  to the "solid-info" tag
 *
 */

// TODO: Add MathJax to apply LaTeX to the website

export function renderCube(Solid) {
  const realVolume = Number(Solid.side) ** 3;
  const realArea = (Number(Solid.side) ** 2) * 6;

  return `
  <p id="definition">
    <b>Definição: </b> Poliédro de 6 faces quadradas, onde
    cada um dos seus vertices tem o mesmo tamanho e cada face
    a mesma área.
  </p>

  <ul>
    <li><b>Tamanho do lado do cubo:</b> ${Solid.side} <i>cm</i></li>
    <li><b>Formula do seu Volume:</b> l³</li>
    <li><b>Formula do seu Área:</b> 6l²</li>
    <li><b>Volume real do sólido:</b> ${realVolume} <i>cm³</i></li>
    <li><b>Área real do sólido:</b> ${realArea} <i>cm²</i></li>
    <li><b>Quantidade de faces:</b> 6</li>
    <li><b>Quantidade de arestas:</b> 12</li>
    <li><b>Quantidade de vértices:</b> 8</li>
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
  <p id="definition">
    <b>Definição: </b> Poliédro de tipo prisma que possui
    uma base que é circular.
  </p>

  <ul>
    <li><b>Raio da Base:</b> ${Solid.radius} <i>cm</i></li>
    <li><b>Altura do Cilindro:</b> ${Solid.height} <i>cm</i></li>
    <li><b>Formula do Volume:</b> πr²h</li>
    <li><b>Formula da Área:</b> 2πr² + 2πrh</li>
    <li><b>Volume real do sólido:</b> ${realVolume.toFixed(3)} <i>cm³</i></li>
    <li><b>Área real do Sólido:</b> ${realArea.toFixed(3)} <i>cm²</i></li>
    <li><b>Quantidade de faces:</b> 3</li>
    <li><b>Quantidade de arestas:</b> 3</li>
    <li><b>Não possui vérices</b></li>
  </ul>
  `;
} 

// TODO: Tetrahedron
export function renderRegularTetrahedron(Solid) {
  return `Sólido: ${Solid.solid}`;
}

export function renderRegularDodecahedron(Solid) {
  return `
  <p id="definition">
    <b>Definição:</b> Poliédro de 12 faces onde cada
    face é um pentagono regular.
  </p>

  <ul>
    <li><b>Tamanho do lado do dodecaedro:</b> ${Solid.side} <i>cm</i></li>
    <li><b>Quantidade de faces:</b> 12</li>
    <li><b>Quantidade de arestas:</b> 30</li>
    <li><b>Quantidade de vertices:</b> 20</li>
    <li><b>É um sólido de platão.</b></li>
    <li></li>
  <ul>
  `;
}

export function renderSphere(Solid) {
  const realVolume = 4/3 * Math.pi * (Number(Solid.radius) ** 3);
  const realArea = 4 * Math.pi * (Number(Solid.radius) ** 2);

  return `
   <ul>
     <p id="definition">
       <b>Definição:</b> É um poliedroi liso tal que existe um conjunto
       de todos os pontos do espaço que estão fixos pela mesma distância
       de um raio.
     </p>

     <li><b>Raio real da esfera:</b> ${Solid.radius} <i>cm</i></li>
     <li><b>Formula do Volume:</b> 4/3 * πr³</li>
     <li><b>Formula do Área:</b> 4πr²</li>
     <li><b>Volume real do sólido:</b> ${realVolume} <i>cm³</i></li>
     <li><b>Área real do sólido:</b> ${realArea} <i>cm²</i></li>
     <li><b>Não possui face, aresta e nem vertice.</b></li>
     <li><b>Mas se considera que tenha uma surperficie curva.</b></li>
   </ul>
  `;
}
