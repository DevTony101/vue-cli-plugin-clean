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

function addTailwindConfig(api) {
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

function addBaseComponents(api) {
  api.extendPackage({
    devDependencies: {
      lodash: "^4.17.19",
    },
  });

  api.render("./template");
}

module.exports = { addPrettierConfig, addBaseComponents, addTailwindConfig };
