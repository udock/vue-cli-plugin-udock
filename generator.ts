module.exports = (api: any, options: any, rootOptions: any) => {
  api.extendPackage({
    scripts: {
      'udock:setup': 'vue invoke @udock/udock'
    }
  })
  api.render('./templates/@udock/vue-bootstrap')

  for (const config of options.plugins) {
    const pluginName = config.plugin
    options.plugins[pluginName] = true
    if (config.package) {
      api.extendPackage(config.package)
    }
    if (config.template !== false) {
      api.render(options.template || `./templates/${pluginName}`)
    }
  }
}
