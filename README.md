# Vue CLI Plugin Clean
[![License](https://img.shields.io/npm/l/vue-cli-plugin-clean?style=flat-square)](https://github.com/DevTony101/vue-cli-plugin-clean/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/vue-cli-plugin-clean?style=flat-square&logo=npm)](https://www.npmjs.com/package/vue-cli-plugin-clean)
[![downloads](https://img.shields.io/npm/dm/vue-cli-plugin-clean?style=flat-square&logo=npm)](https://www.npmjs.com/package/vue-cli-plugin-clean)
[![dependencies](https://img.shields.io/david/devtony101/vue-cli-plugin-clean?style=flat-square&logo=dependabot)](https://github.com/DevTony101/vue-cli-plugin-clean)

A vue 2.x plugin that helps you bootstrap your Vue application by performing some common configurations.

Table of Contents
=================
  * [Features](#features)
    * [General](#general)
    * [Support for base components](#support-for-base-components)
    * [Prettier configuration](#prettier-configuration)
  * [Usage](#usage)
    * [Getting started](#getting-started)
    * [Using the BaseIcon component](#using-the-baseicon-component)
    * [Using the basec command](#using-the-basec-command)
  * [About](#about)
    * [Why should you use this plugin?](#why-should-you-use-this-plugin)
    * [FAQ](#faq)

## Features
### General
The main goal of this plugin is to quickly set up a project by deleting some files and components created by the Vue CLI service. By default this plugin will:

- Delete everything in the `components` folder
- Delete everything in the `views` folder except the `Home.vue` file
- Re-write the `router/index.js` file to only include the route to the `Home.vue` file
- Re-write the `App.vue` file to remove all the boilerplate code

### Support for base components
This an opt-in feature that you can enable when installing this plugin (go to the [getting started](#general) section if you want to know more about that).

It is a good practice that you keep a handful of components that you are going to use across all your Vue application (like buttons, form inputs, etc). These type of components are called **Base Components**. Normally you would add them to the global scope by editing the `main.js` file but, if you chose to add this feature, this plugin automatically adds the necessary code to register base components to a process called [global registering](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components).

In addition to that, this plugin will create a base component called `BaseIcon`, a component you can use to display **SVG** icons effortlessly. If you want know how to use it, refer to the [using the BaseIcon component](#using-the-baseicon-component) section.

Lastly, this feature adds a new command to your project called `basec` that will let you create base components directly from the command line. If you wanna know more about that please refer to the [using the basec command](#using-the-basec-command) section.

After all the configurations are done, the file structure of your app will the look something like this:

```diff
  public
  ├── favicon.ico
+ ├── icons.svg
  ├── index.html
  src
  └── assets
  │   ├── logo.png
  └── components
  │   └── base
+ │       ├── BaseIcon.vue
  └── router
  │   ├── index.js
  └── store
      ├── index.js
  └── views
  │   ├── Home.vue
  ├── App.vue
  ├── main.js
```

### Prettier configuration
This an opt-in feature that you can enable when installing this plugin (go to the [getting started](#general) section if you want to know more about that).

If you chose Prettier as your code formatter, you might want to configure it with some additional options. This plugin adds a `.prettierrc.js` configuration file to your root folder with some default options. (This will only surt effect if the `@vue/eslint-config-prettier` plugin is installed on your project).

```js
// Default structure of the .prettierrc.js config file
module.exports = {
  trailingComma: "es5",
  vueIndentScriptAndStyle: true,
};
```

## Usage
### Getting started
Open your vue-cli project through your terminal and write:

```
vue add clean
```

After that, the vue-cli service will install the plugin and then ask you about some additional features you might want to add:

- [Support for base components](#support-for-base-components)
- [Additional prettier configuration](#prettier-configuration)

Both of those features are **optional** but beware, the vue-cli service will try to add them by _default_.

When the configurations are complete, the plugin will notify you about what files were created, modified or deleted.

### Using the BaseIcon component
The `BaseIcon` component renders an svg element that is located on the `icons.svg` file. The way you add a new svg elements is by writing the following inside the `defs` tags:

```html
<symbol id="some_id" viewBox="...">
 <path d="..."/>
</symbol>
```

Then you can use the `BaseIcon` component like this:

```vue
<BaseIcon icon="some_id" />
```

The `icon` prop is **required**. Note that the value you pass to the `icon` prop must match the value you put on the `id` field of the svg element you want to render.

### Using the `basec` command

## About
### Why should you use this plugin?
### FAQ
