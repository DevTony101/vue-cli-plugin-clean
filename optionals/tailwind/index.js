const fs = require("fs");
const path = require("path");

module.exports = function addTailwindConfig(api) {
  const root = api.resolve("src/../");
  api.injectImports(api.entryFile, `import './assets/css/tailwind.css'`);
  api.render("./template")
  
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
}
