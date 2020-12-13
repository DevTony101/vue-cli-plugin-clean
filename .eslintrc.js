module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "linebreak-style": "off",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
  },
};
