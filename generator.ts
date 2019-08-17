module.exports = (api: any, options: any, rootOptions: any) => {
  console.log(options)

  api.extendPackage({
    scripts: {
      'udock:setup': 'vue invoke @udock/udock'
    },
    devDependencies: {
      '@udock/vue-bootstrap': '^0.0.2'
    }
  })
  api.render('./template')

  for (const plugin of options.plugins) {
    const [pluginName, pluginVersion] = plugin.split('#')
    options.plugins[pluginName] = true
    api.extendPackage({
      devDependencies: {
        [`@udock/${pluginName}`]: pluginVersion
      }
    })
    api.render(`./template-${pluginName}`)
  }
}
