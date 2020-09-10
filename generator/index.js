const fs = require("fs-extra");

module.exports = (api) => {
  const configFiles = [".eslintrc", ".prettierrc"];
  const directories = ["views/", "components/"];
  for (let i = 0; i < directories.length; i++) {
    const dir = `src/${directories[i]}`;
    fs.emptyDirSync(api.resolve(dir));
  }
  fs.mkdir(api.resolve("src/components/base"));
  
  api.render("./template");
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.19",
    },
  });

  api.onCreateComplete(() => {
    const path = api.resolve("src/../");
    for (let i = 0; i < configFiles.length; i++) {
      const fromFile = `${__dirname}/../utils/${configFiles[i]}.txt`;
      const toFile = `${path}/${configFiles[i]}.js`;
      const data = fs.readFileSync(fromFile, options = {
        encoding: 'utf8',
        flag: 'r'
      });

      fs.writeFileSync(toFile, data, options = {
        encoding: 'utf8',
        flag: 'w'
      });
    }
  })
};
