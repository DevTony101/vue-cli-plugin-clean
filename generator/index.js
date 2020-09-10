const fs = require("fs-extra");

module.exports = (api) => {
  const directories = ["views/", "components/"];
  api.render("./template");
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.19",
    },
  });

  api.onCreateComplete(() => {
    for (let i = 0; i < directories.length; i++) {
      const dir = `src/${directories[i]}`;
      if (fs.ensureDirSync(dir)) fs.emptyDirSync(api.resolve(dir));
    }
    fs.mkdir(api.resolve("src/components/base"));
  });
};
