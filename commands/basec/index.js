/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
module.exports = (args, api) => {
  const fs = require("fs");
  const { EOL } = require("os");
  const { RED, GREEN } = require("../../utils/colors");
  const componentName = args._[0];
  const scaffoldButton = args["scaffold-button"];
  const prefix = args.prefix ? capitalize(args.prefix) : "Base";

  if (componentName || scaffoldButton) {
    let filename = componentName ? `${prefix + capitalize(componentName)}` : "BaseButton";
    let directory = `src/components/base/${filename}.vue`;
    let dirPath = api.resolve(directory);
    let auxFilename = filename;
    while (fs.existsSync(dirPath)) {
      auxFilename = `${filename}-${Math.random().toString(36).slice(-5)}`;
      directory = `src/components/base/${auxFilename}.vue`;
      dirPath = api.resolve(directory);
    }
    if (filename !== auxFilename) {
      console.log(`\n${filename} already existed.`);
      filename = auxFilename;
    }
    const content = replaceContent(`${__dirname}/templates/Base${scaffoldButton ? "Button" : ""}.vue`, /name: "base",/, `  name: "${filename}",`);
    fs.writeFileSync(dirPath, content.join(EOL), { encoding: "utf-8" });
    console.log(GREEN, "CREATED ", directory);
  } else {
    console.log(RED, "\nError: You must supply either a name or a scaffold option");
  }

  function replaceContent(path, strMatch, strReplace) {
    const content = fs.readFileSync(path, { encoding: "utf-8" });
    const lines = content.split(/\r?\n/g);
    const renderIndex = lines.findIndex((line) => line.match(strMatch));
    lines[renderIndex] = strReplace;
    return lines;
  }

  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
};
