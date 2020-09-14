const fs = require("fs");
const path = require("path");

module.exports = function addTailwindConfig(api) {
  api.injectImports(api.entryFile, `import './assets/css/tailwind.css'`);
  api.render("./template");
  
  api.extendPackage({
    dependencies: {
      tailwindcss: "^1.7.3",
      autoprefixer: "^9.8.6",
    },
  });

  api.render((files) => {
    files["postcss.config.js"] = api.genJSConfig({
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    });

    files["tailwind.config.js"] = api.genJSConfig({
      purge: [],
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
      future: {},
    });
  });

  createdFiles.push("src/assets/css/tailwind.css");
  createdFiles.push("tailwind.config.js");
  createdFiles.push("postcss.config.js");
  if (!modifiedFiles.includes(`src/${api.entryFile}`)) modifiedFiles.push(`src/${api.entryFile}`);
}
