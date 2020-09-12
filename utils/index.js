function getConfigFiles() {
  return [
    {
      name: ".eslintrc",
      path: ".eslintrc.js",
    },
    {
      name: ".prettierrc",
      path: ".prettierrc.js",
    },
    {
      name: "icons",
      path: "public/icons.svg",
    },
  ];
}

module.exports = { getConfigFiles };
