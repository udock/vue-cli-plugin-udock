const bootstrap = require('@udock/bootstrap')

module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    bootstrap(webpackConfig)
  })
}
