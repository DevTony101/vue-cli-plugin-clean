const basec = require("./commands/basec/index")

module.exports = (api, options) => {
  api.registerCommand("basec", {
    description: "Generates a new base component",
    usage: "vue-cli-service basec name [options]",
    options: {
      "name": "The name of the component",
      "--scaffold-button": "Generates a predefined base component for a button",
      "--preffix": "The preffix for the name of the component. By default 'Base'"
    }
  }, (args) => basec(args, api));
};
