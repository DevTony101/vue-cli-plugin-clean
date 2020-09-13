const fs = require("fs");
const path = require("path");
const optionals = require("../optionals/index");

module.exports = (api) => {
  const directories = ["views/", "components/"];

  api.render("./template");
  optionals.prettierConfig(api);
  optionals.scaffoldProject(api);

  api.onCreateComplete(() => {
    emptyDirs(directories);
  });

  function emptyDirs(directories) {
    for (let i = 0; i < directories.length; i++) {
      const directory = `src/${directories[i]}`;
      const dirPath = api.resolve(directory);
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        if (fs.lstatSync(filePath).isFile()) {
          if (file !== "Home.vue") {
            fs.unlinkSync(filePath);
          }
        }
      }
    }
  }
};