/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */

module.exports = function addPrettierConfig(api) {
  api.render((files) => {
    files[".prettierrc.js"] = api.genJSConfig({
      trailingComma: "es5",
      vueIndentScriptAndStyle: true,
    });
  });

  createdFiles.push(".prettierrc.js");
};
