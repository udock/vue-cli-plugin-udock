import fs from 'fs'
import prompts from './prompts'

const plugins = prompts.find((prompt) => prompt.name === 'plugins')

const depsMap = {} as {[key: string]: any}
if (plugins) {
  for (const plugin of plugins.choices) {
    const pluginName = plugin.value.plugin
    try {
      const pkg = require(`../${pluginName.replace('@udock/', '')}/package.json`)
      depsMap[pluginName] = {
        dependencies: pkg.peerDependencies,
        devDependencies: {
          [pluginName]: `^${pkg.version}`
        }
      }
    } catch (e) {
      console.warn(`Can not find plugin: ${pluginName}`)
    }
  }
}

fs.writeFileSync('./dependencieVersionMap.json', JSON.stringify(depsMap, null, 2))
