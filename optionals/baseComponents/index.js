const fs = require("fs");
  
module.exports = function addBaseComponents(api) {
  const root = api.resolve("src/../");
  fs.copyFileSync(`${__dirname}/resources/icons.svg`, `${root}/public/icons.svg`);

  api.extendPackage({
    devDependencies: {
      lodash: "^4.17.19",
    },
  });

  api.render("./template");
}