const fs = require("fs-extra");
const optionals = require("../optionals/index");

module.exports = (api) => {
  const directories = ["views/", "components/"];
  for (let i = 0; i < directories.length; i++) {
    const dir = `src/${directories[i]}`;
    fs.emptyDirSync(api.resolve(dir));
  }
  // fs.mkdir(api.resolve("src/components/base"));

  api.render("./template");
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.19",
    },
  });

  optionals.prettierConfig(api);
};
