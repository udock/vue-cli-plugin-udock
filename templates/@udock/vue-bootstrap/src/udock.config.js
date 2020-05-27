module.exports = {
  framework: 'vue',
  plugins: [<%var spstr='';function has(plugin){var ret=options.plugins[plugin]>-1;if(ret){__append(spstr);spstr=',\n    '};return ret}%>
    <%if(has('@udock/vue-plugin-mock')){%>'mock'<%}if(has('@udock/vue-plugin-auto-router')){%>[
      'auto-router',
      {
        ignore: 'ar.ignore', // 在目录中创建一个空文件ar.ignore，此目录内的文件就不会被生成路由扫描，这个配置可以修改这个文件的名称
        path: 'src', // 生成路由扫描的根目录
        'chunk-name': [
          '2'
        ]
      }
    ]<%}if(has('@udock/vue-plugin-element-ui')){%>['element-ui', {
      theme: 'element-ui/packages/theme-chalk/src/base.scss',
      // 'pre-styles': [`~@/themes/var.scss`],
      components: [
        'grid',
        'form',
        'icon',
        'input',
        'button'
      ]
    }]<%}%>
  ]
}
