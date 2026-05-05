/*  translation.js
 *  
 *  Translation file
 */

// TODO: Add the translations... DUHH??!!

import * as info from "./information.js";

// English
export const EN = {
  solid_name: "Hello, my name is",
  credit: `Created by: <a href="${info.MAIN_PAGE}">Samuel-de-Oliveira</a>`,
  version: "Base version:",
  side_value: "The side of this solid has:",
  volume_formula: "Volume's formula:",
  area_formula: "Area's formula:",
  volume: "Real volume of the solid:",
  area: "Real área of the solid:",
  faces: "Number of faces:",
  edges: "Number of edges:",
  vertex: "Number of vertices:",
  platon: "I am a Platon's solid.",
  definition: "<b>Defition:</b>",
  narrator: "Activate narrator",
};

// Français
export const FR = {
  solid_name: "Salut, je m'appele", 
  credit: `Creé par: <a href="${info.MAIN_PAGE}">Samuel-de-Oliveirai</a>`,
  version: "Version de la base:",
  side_value: "Le côté de ce solide vaut:",
  volume_formula: "Formule du volume:",
  area_formula: "Formule de l'aire:",
  volume: "Le volume réel du solide:",
  area: "L'aire réel du solide:",
  faces: "Nombre de faces:",
  edges: "Nombre de arêtes:",
  vertex: "Nombre de sommet:",
  platon: "Je suis un solide de Platon.",
  definition: "<b>Defition:</b>",
  narrator: "Activer narrador",
};

// Português Brasil
export const PT_BR = {
  solid_name: "Olá, meu nome é",
  credit: `Criado por: <a href="${info.MAIN_PAGE}">Samuel-de-Oliveira</a>`,
  version: "Versão da base:",
  volume_formula: "Fórmula do volume:",
  area_formula: "Fórmula da área:",
  volume: "Volume real do sólido:",
  area: "Área real do sólido:",
  faces: "Número de faces:",
  edges: "Número de arestas:",
  vertex: "Número de vertices:",
  side_value: "O lado deste sólido mede:",
  platon: "Eu sou um sólido de Platão",
  definition: "<b>Definição:</b>",
  narrator: "Ativar narrador",
};

// Solids English
export const SOLIDS_EN = {
  Cube: "Cube",
  Cylinder: "Cylinder",
  Sphere: "Sphere",
  RegularTetrehedron: "Regular Tetrahedron",
  RegularDodecahedron: "Regular Dodecahedron",
  Cobblestone: "Cobblestone",
};

// Solides Français
export const SOLIDS_FR = {
  Cube: "Cube",
  Cylinder: "Cylinder",
  Sphere: "Sphère",
  RegularTetrehedron: "Tétraèdre Régulier",
  RegularDodecahedron: "Dodécaèdre Régulier",
  Cobblestone: "parallélépipède",
};

// Solidos Português Brasil
export const SOLIDS_PT_BR = {
  Cube: "Cubo",
  Cylinder: "Cilindro",
  Sphere: "Esfera",
  RegularTetrehedron: "Tetraedro Regular",
  RegularDodecahedron: "Dodecaedro Regular",
  Cobblestone: "paralelepípedo",
};

//// Language system ////
export const lang = navigator.language;
export var solid_translate = {};
export var translate = {};

if (["en", "en-us"].includes(lang.toLowerCase())) {
  // English
  solid_translate = SOLIDS_EN;
  translate = EN;
} else if (["fr", "fr-fr"].includes(lang.toLowerCase())) {
  // Français
  solid_translate = SOLIDS_FR;
  translate = FR;
} else if (["pt", "pt-br", "pt-pt"].includes(lang.toLowerCase())) {
  // Português
  solid_translate = SOLIDS_PT_BR;
  translate = PT_BR;
} else {
  // In case of no translations avalible
  solid_translate = SOLIDS_EN;
  translate = EN;
}
