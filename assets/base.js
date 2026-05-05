/* base.js
 *
 * Here works the main algorithm of
 * Solids recognition.
 *
 */

import * as solids from "./solids.js";
import * as tools from "./tools.js";
import * as info from "./information.js";
import * as translation from "./translations.js";

//// MathJax Acessibility Config ////
window.MathJax = {
  options: {
    enableSpeech: true,
    enableMenu: true,
    renderActions: {
      assistiveMml: [],
    },
  },
  loader: {
    load: ['[a11y]/semantic-enrich'],
  },
  a11y: {
    speech: true,
  },
};
/////////////////////////////////////


//// Voice Speech test ////
document.getElementById("read").innerHTML = translation.translate["narrator"];
document.getElementById("read").onclick = () => {
  var name_content = document.getElementById("solid-name").innerText;
  var say_solid_name = new SpeechSynthesisUtterance(name_content);
  say_solid_name.pitch = 1.2;
  say_solid_name.rate = 1.15;
  say_solid_name.lang = translation.lang;

  var solid_content = document.getElementById("solid-info").innerText;
  var say_content = new SpeechSynthesisUtterance(solid_content);
  say_content.pitch = 1.2;
  say_content.rate = 1.15;
  say_content.lang = translation.lang;

  console.log(`The narrator said: ${name_content}`);
  speechSynthesis.speak(say_solid_name);
  console.log(`The narrator said: ${solid_content}`);
  speechSynthesis.speak(say_content);
};
document.getElementById("read").onmouseenter = () => {
  var onenter = new SpeechSynthesisUtterance(
    translation.translate["narrator"]
  );
  onenter.lang = translation.lang;
  onenter.rate = 1.15;
  onenter.pitch = 1.2;

  console.log(`The narrator said: ${translation.translate["narrator"]}`);
  speechSynthesis.speak(onenter);
};
////////////////////////////


// Version formater
document.getElementById("version").innerHTML = `
  ${translation.translate["version"]} ${info.ARAGEO_VERSION}
`;
document.getElementById("credit").innerHTML = translation.translate["credit"];

// Get polyhedron info
const params = new URLSearchParams(window.location.search);
const solidObject = Object.fromEntries(params);

console.log(solidObject); // Verify polyhedron Parameters

// Title set
if (solidObject.solid) {
  document.getElementById("solid-name").innerHTML = `
    ${translation.translate["solid_name"]} 
    ${translation.solid_translate[solidObject.solid]}
  `;
} else {
  document.getElementById("solid-name").innerHTML = "ERROR: Você esqueceu meu nome!!!";
}

// Polyhedron Information
if (solidObject.solid) {
  // Show polyhedron info
  try {
    document.getElementById("solid-info").innerHTML = solids[
      tools.SYSTEM_DATA.solids[solidObject.solid]
    ](solidObject);
  } catch(Err) {
    document.getElementById("solid-info").innerHTML = `
      <b>Estamos sem informações suficientes sobre o sólido!!!</b><br>
      <b>ERROR: ${Err.name}!!!</b>
    `;
  }
} else {
  // In case theres is no Seach Params
  document.getElementById("solid-info").innerHTML = `
    <b>Estamos sem informações suficientes sobre o sólido!!!</b><br>
    <b>ERROR: O sistema de Seach Parameters está sem parametros!!!</b>
  `;
}
