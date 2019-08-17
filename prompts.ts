module.exports = [
  {
    type: 'checkbox',
    name: 'plugins',
    message: 'select plugins',
    choices: [
      { name: 'auto router', value: 'vue-plugin-auto-router#^0.0.1', checked: true },
      // { name: 'udock ui', value: 'vue-plugin-ui#^0.0.1', checked: true }
      { name: 'mock', value: 'vue-plugin-mock#^0.0.2', checked: true },
      { name: 'iview', value: 'vue-plugin-iview#^0.0.1' },
      { name: 'element ui', value: 'vue-plugin-element-ui#^0.0.1' },
      // { name: 'data share', value: 'vue-plugin-data--share#^0.0.1', checked: true }
      // { name: 'data vuex', value: 'vue-plugin-data--vuex#^0.0.1', checked: true }
      { name: 'debug', value: 'debug#^0.0.2' }
    ]
  }
]
