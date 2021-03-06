/* eslint-disable no-undef */

const fs = require("fs");
const path = require("path");

module.exports = function addBaseComponents(api) {
  const root = api.resolve("src/../");
  fs.copyFileSync(path.join(__dirname, "resources/icons.svg"), path.join(root, "public/icons.svg"));
  const addPlugin = (plugin, option = plugin) => {
    if (api.hasPlugin(plugin)) {
      api.injectImports(api.entryFile, `import ${option} from "./${option}"`);
      api.injectRootOptions(api.entryFile, `${option}`);
    }
  };

  api.extendPackage({
    devDependencies: {
      lodash: "^4.17.19",
    },
  });

  api.render("./template");
  addPlugin("vuex", "store");
  addPlugin("router");

  createdFiles.push("public/icons.svg");
  createdFiles.push("src/components/base/BaseIcon.vue");
  if (!modifiedFiles.includes(`${api.entryFile}`)) modifiedFiles.push(`${api.entryFile}`);
};
