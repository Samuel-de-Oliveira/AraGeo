/* index.js
 *
 * The script of apresentation page
 *
 */

// TODO: Add translation for email contact

import * as tools from "./tools.js";
import * as info from "./information.js";
import * as translation from "./translations.js";

document.getElementById("version").innerHTML = `
  Versão da base: ${info.ARAGEO_VERSION}
`;

document.getElementById("credit").innerHTML = `
  Criado por: <a href="${info.MAIN_PAGE}">Samuel-de-Oliveira</a>;<br>
  Email do desenvolvedor: ${info.DEV_EMAIL}.
`;
