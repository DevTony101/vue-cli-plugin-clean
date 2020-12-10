module.exports = (pkg) => {
  const prompts = [
    {
      type: "confirm",
      name: "scaffold",
      message: "Add support for base components?",
      default: true,
      group: "Strongly recommended",
      description: "In addition to deleting all pre-built components, it will add lodash and the necessary configuration for supporting base components.",
      link: "https://github.com/DevTony101/vue-cli-plugin-clean#Features",
    },
  ];

  if ("@vue/eslint-config-prettier" in (pkg.devDependencies || {})) {
    prompts.push({
      type: "confirm",
      name: "prettier",
      message: "Add prettier configuration?",
      default: true,
      group: "Strongly recommended",
      description: "This will add a prettier configuration file and add a vue/plugin-recommended plugin to your eslint configuration file.",
      link: "https://github.com/DevTony101/vue-cli-plugin-clean#Features",
    });
  }

  return prompts;
};
