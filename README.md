# vue-cli-plugin-clean
[![License](https://img.shields.io/npm/l/vue-cli-plugin-tailwind.svg)](https://github.com/DevTony101/vue-cli-plugin-clean/blob/master/LICENSE)

A plugin that helps you bootstrap your Vue application by doing some common configurations.

## Features
The **primary goal** of this plugin is to purge out all the files that come shipped in the `views/` and `components/` folder. By default, it also rewrites the `Home.vue` and `App.vue` components to just leave the minimum necessary to function.

Some additional features are:

- **Add support for base components**: It is a good practice that you keep a handful of components that you are going to use across all your app (like buttons, form fields, etc). This plugin automatically adds [global registering](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components) for your base components. It also adds a `BaseIcon.vue` file, a component that you can use to show SVG icons [as recommended](https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example) by Vue and finally it creates a `icons.svg` file on the `public/` folder in which you can store all your icons. The file structure of your app will then look something like this:

```
public
├── favicon.ico
├── icons.svg
├── index.html
src
├── assets
│   ├── logo.png
├── components
│   └── base
│       └── BaseIcon.vue
├── router
│   ├── index.js                  👈 With all paths removed except Home
└── store
    ├── index.js
├── views
│   ├── Home.vue
├── App.vue
├── main.js
```

- **Add Prettier configuration**: If you chose Prettier as your code formatter, you might want to configure it with some additional options. This plugin adds a `.prettierrc.js` configuration file to your root folder with some preconfigured options. (This will only surt effect if the `@vue/eslint-config-prettier` is installed on your project).

```js
// Default structure of the .prettierrc.js config file
module.exports = {
  trailingComma: "es5",
  vueIndentScriptAndStyle: true,
};
```

- **Add support for TailwindCSS**: If by any reason you want to use **Tailwind** as your CSS framework, this plugin can help you get started by automatically creating a `postcss.config.js` and a `tailwind.config.js` file, in addition to creating the `tailwind.css` file on the `assets` folder.

```js
// Default structure of the .postcss.config.js config file
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```js
// Default structure of the .tailwind.config.js config file
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {},
};
```

Right now these are all the features this plugin has and they are all **optional**, more of that in the next section.

## Getting Started
After your project has been created with the `vue-cli` service, add the plugin like so:
```
vue add clean
```
It'll then ask you what additional features (the ones seen above) do you want to add, **by default they are all set to true**, which means they are all going to be addef unless said otherwise. Please note that if you don't select any feature, the plugin will only delete the files mentioned above and install no additional dependency.

## License
[MIT](https://github.com/DevTony101/vue-cli-plugin-clean/blob/master/LICENSE)
