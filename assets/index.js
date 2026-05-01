/* index.js
 *
 * The script of apresentation page
 *
 */

import * as tools from "./tools.js";

document.getElementById("version").innerHTML = `
  Versão da base: ${tools.ARAGEO_VERSION}
`;

document.getElementById("credit").innerHTML = `
  Criado por: <a href="${tools.MAIN_PAGE}">Samuel-de-Oliveira</a>
`;
