const dependencieVersionMap = require('./dependencieVersionMap.json')

function resolvePackageJson (pluginName: string) {
  const deps = dependencieVersionMap[pluginName]
  return {
    dependencies: deps && deps.dependencies,
    devDependencies: deps && deps.devDependencies
  }
}

export = (api: any, options: any, rootOptions: any) => {
  api.extendPackage({
    scripts: {
      'udock:setup': 'vue invoke @udock/udock'
    }
  })
  api.render('./templates/@udock/vue-bootstrap')

  for (const config of options.plugins) {
    const pluginName = config.plugin
    options.plugins[pluginName] = true
    api.extendPackage(resolvePackageJson(pluginName))
    if (config.template !== false) {
      api.render(options.template || `./templates/${pluginName}`)
    }
  }
}
