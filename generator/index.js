const fs = require("fs-extra");

module.exports = (api) => {
  const files = ["views/About.vue"];

  api.render("./template");
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.19",
    },
  });

  api.onCreateComplete(() => {
    fs.emptyDirSync(api.resolve("src/components/"));
    fs.mkdirSync(api.resolve("src/components/base"));
    for (let i = 0; i < files.length; i++) {
      const file = `src/${files[i]}`;
      if (fs.existsSync(file)) fs.unlinkSync(api.resolve(file));
    }
  });
};
