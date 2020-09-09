module.exports = (api) => {
  api.render("./template");
  api.extendPackage({
    dependencies: {
      "lodash": "^4.17.19",
    },
  });
};
