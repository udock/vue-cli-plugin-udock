module.exports = {
  framework: 'vue',
  plugins: [
    <%if(options.plugins['vue-plugin-auto-router']>-1){%>'mock',<%}%>
    <%if(options.plugins['vue-plugin-auto-router']>-1){%>[
      'auto-router',
      {
        ignore: 'ar.ignore', // 在目录中创建一个空文件ar.ignore，此目录内的文件就不会被生成路由扫描，这个配置可以修改这个文件的名称
        path: 'src', // 生成路由扫描的根目录
        'chunk-name': [
          '2'
        ]
      }
    ]<%}%>
  ]
}
