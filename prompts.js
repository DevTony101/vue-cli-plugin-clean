module.exports = pkg => {
  const prompts = [
    {
      type: 'confirm',
      name: 'scaffold',
      message: 'Add support for base components?',
      default: false,
    }
  ]

  if ('@vue/eslint-config-prettier' in (pkg.devDependencies || {})) {
    prompts.push({
      type: 'confirm',
      name: 'prettier',
      message: 'Add prettier configuration?',
      when: true,
    })
  }

  return prompts;
}