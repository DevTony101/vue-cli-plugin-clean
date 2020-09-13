function addPrettierConfig(api) {
  api.render((files) => {
    files[".eslintrc.js"] = api.genJSConfig({
      root: true,
      env: {
        node: true,
      },
      extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/prettier",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        parser: "babel-eslint",
      },
      rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      },
    });

    files[".prettierrc.js"] = api.genJSConfig({
      trailingComma: "es5",
      vueIndentScriptAndStyle: true,
    });
  });
}

function addBaseComponents(api) {
  api.extendPackage({
    dependencies: {
      lodash: "^4.17.19",
    },
  });

  api.render("./template");
}

module.exports = { prettierConfig, addBaseComponents };
