const fs = require("fs");
const path = require("path");
  
module.exports = function addBaseComponents(api) {
  const root = api.resolve("src/../");
  fs.copyFileSync(path.join(__dirname, "resources/icons.svg"), path.join(root, "public/icons.svg"));

  api.extendPackage({
    devDependencies: {
      lodash: "^4.17.19",
    },
  });

  api.render("./template");
}