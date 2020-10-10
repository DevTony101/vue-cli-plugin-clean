# vue-cli-plugin-clean
[![License](https://img.shields.io/npm/l/vue-cli-plugin-clean.svg)](https://github.com/DevTony101/vue-cli-plugin-clean/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/vue-cli-plugin-clean.svg)](https://www.npmjs.com/package/vue-cli-plugin-clean)
[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-clean.svg)](https://www.npmjs.com/package/vue-cli-plugin-clean)

A plugin that helps you bootstrap your Vue application by performing some common configurations.

## Features ✨
The **primary goal** of this plugin is to purge out all the files stored in the `views/` and `components/` folders that, by default, come shipped within a normal `vue-cli` project. It also rewrites the `Home.vue` and `App.vue` components to leave just the minimum necessary to function.

Some additional features are:

- **Support for base components**: It is a good practice that you keep a handful of components that you are going to use across all your Vue application (like buttons, form fields, etc). These type of components are called **Base Components** and can be enabled to use globally in your project through [global registering](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components), a process that is automatically done by this plugin. In addition, this plugin creates a `BaseIcon.vue` file, a component that you can use to display **SVG** icons stored in a `icons.svg` file (also created by this plugin) [as recommended](https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example) by Vue. The file structure of your app will then look something like this:

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
│   ├── index.js       👈 With all paths removed except Home
└── store
    ├── index.js
├── views
│   ├── Home.vue
├── App.vue
├── main.js
```

- **Support for TailwindCSS**: If by any reason you want to use **Tailwind** as your CSS framework, this plugin can help you get started by automatically creating configuration files for `postcss` and `tailwind`, in addition to creating a `tailwind.css` file on the `assets` folder.

```js
// Default structure of the postcss.config.js config file
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```js
// Default structure of the tailwind.config.js config file
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

- **Prettier configuration**: If you chose Prettier as your code formatter, you might want to configure it with some additional options. This plugin adds a `.prettierrc.js` configuration file to your root folder with some default options. (This will only surt effect if the `@vue/eslint-config-prettier` plugin is installed on your project).

```js
// Default structure of the .prettierrc.js config file
module.exports = {
  trailingComma: "es5",
  vueIndentScriptAndStyle: true,
};
```

## Usage 👨‍💻
After your project has been created with the `vue-cli` service, add the plugin like so:
```
vue add clean
```
It'll then ask you what additional features (the ones seen above) do you want to add, **by default they are all set to true**, which means they are all going to be added unless said otherwise.

### What If I Don't Have Vuex or Vue-router?
You may have seen that in the directory graph above there are three folders: `store/`, `router/` and `views/` that are specific to `vuex` and `vue-router` respectively, does that mean that you have to have them installed in your project in order to use this plugin? **No**, they are put in there just as an example. These files: `router/index.js`, `views/**` and `src/main.js` will be created and/or modified **only** if they need to and if the user (you) agrees to.

**Note**: This plugin is only intended to be used right after a project is created as it deletes **all** the components. This might change in future versions.

## License
[MIT](https://github.com/DevTony101/vue-cli-plugin-clean/blob/master/LICENSE)
