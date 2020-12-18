/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
module.exports = (args, api) => {
  const fs = require("fs");
  const { EOL } = require("os");
  const { RED } = require("../../utils/colors");
  const componentName = args._[0];
  const scaffoldButton = args["scaffold-button"];
  const prefix = args.preffix ? capitalize(args.preffix) : "Base";

  if (componentName || scaffoldButton) {
    const filename = componentName ? `${prefix + capitalize(componentName)}` : "BaseButton";
    let directory = `src/components/base/${filename}.vue`;
    let dirPath = api.resolve(directory);
    while (fs.existsSync(dirPath)) {
      directory = `src/components/base/${filename}-${Math.random().toString(36).slice(-5)}.vue`;
      dirPath = api.resolve(directory);
    }
    const strMatch = scaffoldButton ? /name: "BaseButton",/ : /name: "base",/;
    const content = replaceContent(`${__dirname}/templates/Base${scaffoldButton ? "Button" : ""}.vue`, strMatch, `  name: "${filename}",`);
    fs.writeFileSync(dirPath, content.join(EOL), { encoding: "utf-8" });
    console.log(`\n${filename} created succesfully`);
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
