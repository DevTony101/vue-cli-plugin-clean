module.exports = pkg => {
  const prompts = [
    {
      type: 'confirm',
      name: 'scaffold',
      message: 'Add support for base components?',
      default: false,
      description: 'In addition to deleting all pre-built components, it will add lodash and the necessary configuration for supporting base components.',
    },
    {
      type: 'confirm',
      name: 'tailwind',
      message: 'Add support for tailwind?',
      default: false,
      description: 'This will install tailwind and add the necessary configuration files.',
    }
  ]

  if ('@vue/eslint-config-prettier' in (pkg.devDependencies || {})) {
    prompts.push({
      type: 'confirm',
      name: 'prettier',
      message: 'Add prettier configuration?',
      when: true,
      description: 'This will add a prettier configuration file and add a vue/plugin-recommended plugin to your eslint configuration file.',
    });
  }

  return prompts;
}