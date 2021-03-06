module.exports = (api) => {
  api.describeTask({
    match: /vue-cli-service basec/,
    description: "Generates a new base component",
    link: "https://github.com/DevTony101/vue-cli-plugin-clean#using-the-basec-command",
    prompts: [
      {
        name: "prefix",
        type: "input",
        default: "Base",
        description: "The prefix for the name of the component (it defaults to 'Base')",
      },
      {
        name: "name",
        type: "input",
        default: "button",
        description: "The name of the base component",
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
      if (answers.prefix && answers.prefix.trim()) args.push("--prefix", answers.prefix);
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
