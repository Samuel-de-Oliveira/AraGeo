/* tools.js
 */

export const ARAGEO_VERSION = "0.1.0";
export const MAIN_PAGE = "https://samuel-de-oliveira.github.io/";

export const SYSTEM_DATA = {
  solids: {
    Cube: "renderCube",
    Cylinder: "renderCylinder",
    RegularTetrahedron: "renderRegularTetrahedron",
    RegularDodecahedron: "renderRegularDodecahedron",
    Sphere: "renderSphere",
  },
}; 

//// Language system ////
//// TODO: Export these variables to base.js and solids.js
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
