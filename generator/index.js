/* eslint-disable no-undef */

const fs = require("fs");
const path = require("path");
const optionals = require("../optionals/index");
const colors = require("../utils/colors");

const { log } = console;

module.exports = (api, options) => {
  global.deletedFiles = [];
  global.modifiedFiles = ["src/router/index.js", "src/views/Home.vue"];
  global.createdFiles = [];
  api.render("./template");

  if (options.prettier) optionals.addPrettierConfig(api);
  if (options.scaffold) {
    optionals.addBaseComponents(api);
    api.extendPackage({
      scripts: {
        basec: "vue-cli-service basec",
      },
    });
  }

  function emptyDirs(directories, exception, audit = true) {
    for (let i = 0; i < directories.length; i++) {
      const directory = `src/${directories[i]}`;
      const dirPath = api.resolve(directory);
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        if (fs.lstatSync(filePath).isFile() && !exception(file)) {
          fs.unlinkSync(filePath);
          if (audit) {
            deletedFiles.push(`${directory + file}`);
          }
        }
      }
    }
  }

  function showLogs() {
    log("\n");
    for (const file of deletedFiles) log(colors.RED, "DELETED ", file);
    for (const file of modifiedFiles) log(colors.YELLOW, "MODIFIED ", file);
    for (const file of createdFiles) log(colors.GREEN, "CREATED ", file);
  }

  api.onCreateComplete(() => {
    if (!api.hasPlugin("router")) {
      emptyDirs(["router/"], () => false, false);
      emptyDirs(["views/", "components/"], () => false);
      for (const dir of directories) fs.rmdirSync(api.resolve(`src/${dir}`));
      modifiedFiles.splice(0, 2);
    } else {
      emptyDirs(["views/", "components/"], (file) => file === "Home.vue");
    }

    if (!api.hasPlugin("vuex")) {
      emptyDirs(["store/modules/", "store/"], () => false, false);
      fs.rmdirSync(api.resolve("src/store/modules"));
      fs.rmdirSync(api.resolve("src/store"));
    }

    showLogs();
  });
};
