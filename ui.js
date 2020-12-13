module.exports = (api) => {
  api.describeTask({
    match: /vue-cli-service basec/,
    description: "Generates a new base component",
    link: "https://github.com/DevTony101/vue-cli-plugin-clean#features-",
    icon: "description",
    prompts: [
      {
        name: "name",
        type: "input",
        default: "button",
        description: "The name of the base component (without the preffix)",
      },
      {
        name: "preffix",
        type: "input",
        default: "Base",
        description: "The preffix for the name of the component (it defaults to 'Base')",
      },
      {
        name: "scaffold",
        type: "list",
        default: "none",
        choices: [
          {
            name: "button",
            value: "button",
          },
          {
            name: "none",
            value: "none",
          },
        ],
        description: "If different of none, it will create a base component with a predefined template for the selected option",
      },
    ],
    onBeforeRun: async ({ answers, args }) => {
      if (answers.name && answers.name.trim()) args.push(answers.name);
      if (answers.preffix && answers.preffix.trim()) args.push("--preffix", answers.preffix);
      switch (answers.scaffold) {
        case "button":
          args.push("--scaffold-button");
          break;
        default:
          break;
      }
    },
  });
};
