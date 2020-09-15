const fs = require("fs");
const path = require("path");
const optionals = require("../optionals/index");
const log = console.log;

module.exports = (api, options) => {
  global.deletedFiles = [];
  global.modifiedFiles = ["src/router/index.js", "src/views/Home.vue"];
  global.createdFiles = [];
  api.render("./template");

  if (options.scaffold) optionals.addBaseComponents(api);
  if (options.prettier) optionals.addPrettierConfig(api);
  if (options.tailwind) optionals.addTailwindConfig(api);

  api.onCreateComplete(() => {
    if (!api.hasPlugin("router")) {
      const directories = ["views/", "router/"];
      emptyDirs([...directories, "components/"], () => false);
      for (let dir of directories) fs.rmdirSync(api.resolve(`src/${dir}`));
      modifiedFiles.splice(0, 2);
    } else {
      emptyDirs(["views/", "components/"], (file) => file === "Home.vue");
    }
    showLogs();
  });

  function emptyDirs(directories, exception) {
    for (let i = 0; i < directories.length; i++) {
      const directory = `src/${directories[i]}`;
      const dirPath = api.resolve(directory);
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        if (fs.lstatSync(filePath).isFile() && !exception(file)) {
          fs.unlinkSync(filePath);
          deletedFiles.push(`${directory + file}`);
        }
      }
    }
  }

  function showLogs() {
    const colors = {
      GREEN: "\x1b[32m%s\x1b[0m",
      RED: "\x1b[31m%s\x1b[0m",
      YELLOW: "\x1b[33m%s\x1b[0m"
    };

    log("\n");
    for (let file of deletedFiles) log(colors.RED, "Deleted file: ", file);
    for (let file of modifiedFiles) log(colors.YELLOW, "Modified file: ", file);
    for (let file of createdFiles) log(colors.GREEN, "Created file: ", file);
  }
};