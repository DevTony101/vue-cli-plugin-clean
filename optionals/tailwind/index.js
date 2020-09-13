module.exports = function addTailwindConfig(api) {
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
