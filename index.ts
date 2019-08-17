const bootstrap = require('@udock/bootstrap')

module.exports = (api: any, projectOptions: any) => {
  api.chainWebpack((webpackConfig: any) => {
    bootstrap(webpackConfig)
  })
}
