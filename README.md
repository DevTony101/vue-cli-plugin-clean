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
    * [Using the `basec` command](#using-the-basec-command)
      * [Using `basec` through NPM scripts](#using-basec-through-npm-scripts)
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
  │   ├── index.js
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

Both of those features are **optional** but beware, the vue-cli service will try to add them by _default_. when the configurations are complete, the plugin will 
notify you about what files were _created_, _modified_ or _deleted_.

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
When the support for the base components is added, the plugin adds a new vue-cli command called `basec`. The `basec` command lets you create a new base component
directly from the command line.

```
Usage: vue-cli-service basec name [options]

Options:

  --scaffold-button  Generates a predefined base component for a button
  --prefix          The prefix for the name of the component. By default 'Base'
```

The `name` is the name of the base component (without 'Base' or any other prefix).

#### Examples
##### Creating a dummy base component
Let's say we want to create a 'dummy' base component for prototyping purposes. We would do as follows:

```
vue-cli-service basec dummy
```

When executed, the command will create a new base component called `BaseDummy.vue`.

##### Creating a scaffolded button component
Sometimes you would like to test your design quickly by adding new components. Among the most used components are buttons. The `basec` command lets you create a
brand new button component, scaffolded with everything you would need:

- Binding for listeners
- Binding for attributes that are _not_ inherited by the div container
- Some default styles and animations

Let's then say we want to create a `BuyButton` for an e-commerce site. We would do as follows:

```
vue-cli-service basec BuyButton --scaffold-button
```

When executed, the command will create a new base component called `BaseBuyButton.vue`.

##### Defining a different prefix
In certain cases you might want to define a different prefix than 'Base'. Although not recommended the `basec` command lets you define a different prefix like so:

```
vue-cli-service basec BuyButton --scaffold-button --prefix custom
```

When executed, the command will create a new base component called `CustomBuyButton.vue`.

#### Using `basec` through NPM scripts
You can also use the `basec` command through the npm script that is created when the plugin is installed. Be aware however, that if you want to pass the additional options
seen in the previous section you must put them after a double dash like so:

```
npm run basec BuyButton -- --scaffold-button --prefix custom
```

This will have the same result as the previous example.

## About
### Why should you use this plugin?
Configuring a new Vue project can be tedious, deleting the autogenerated files, installing the necessary dependencies... This plugin aims to be your tool to aid you in that
task, doing all the work so you can start your project as soon as possible. Also:

- **It's dependency free**: This plugin does not depend on any additional NPM package, making the plugin easy to install and without incrementing your `node_modules` folder size.
- **It has a unique set of features**: This plugin offers a unique set of tools and features that will help you create your next Vue project right away!

### FAQ

#### What if I don't have vuex or vue-router?
You may have seen that in the directory graph above there are three folders: `store/`, `router/` and `views/` that are specific to `vuex` and `vue-router` respectively, does that mean that you have to have them installed in your project in order to use this plugin? **No**, they are put in there just as an example. These files: `router/index.js`, `views/**` and `src/main.js` will be created and/or modified **only** if they need to and if the user (you) agrees to.

#### What if I use a code formatter other than Prettier?
Currently, Vue Clean does not support other code formatters for additional configuration. This will be fixed in future versions.

#### What other options exist for scaffolding a base component?
Currently, Vue Clean only supports the button scaffolding. Form input based components are to be in next updates.
