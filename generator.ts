const dependencieVersionMap = require('./dependencieVersionMap.json')

function resolvePackageJson (pkg: any, pluginName: string) {
  pkg = pkg || {}
  const deps = dependencieVersionMap[pluginName]
  Object.assign(pkg.dependencies, deps.dependencies)
  Object.assign(pkg.devDependencies, deps.devDependencies)
  return pkg
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
    if (config.package) {
      api.extendPackage(resolvePackageJson(config.package, pluginName))
    }
    if (config.template !== false) {
      api.render(options.template || `./templates/${pluginName}`)
    }
  }
}
