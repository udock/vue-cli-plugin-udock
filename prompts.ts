export = [
  {
    type: 'checkbox',
    name: 'plugins',
    message: 'select plugins',
    choices: [
      {
        name: 'auto router',
        value: {
          plugin: '@udock/vue-plugin-auto-router',
        },
        checked: true
      },
      {
        name: 'mock',
        value: {
          plugin: '@udock/vue-plugin-mock',
        },
        checked: true
      },
      {
        name: 'ui',
        value: {
          plugin: '@udock/vue-plugin-ui',
          template: false
        },
        checked: true
      },
      {
        name: 'ui-form',
        value: {
          plugin: '@udock/vue-plugin-ui--form',
          template: false
        },
        checked: true
      },
      {
        name: 'element ui',
        value: {
          plugin: '@udock/vue-plugin-element-ui',
          template: false
        },
        checked: true
      },
      {
        name: 'data share',
        value: {
          plugin: '@udock/vue-plugin-data--share',
          template: false
        }
      },
      {
        name: 'data storage',
        value: {
          plugin: '@udock/vue-plugin-data--storage',
          template: false
        }
      },
      {
        name: 'data vuex',
        value: {
          plugin: '@udock/vue-plugin-data--vuex',
          template: false
        }
      },
      {
        name: 'data async',
        value: {
          plugin: '@udock/vue-plugin-data--async',
          template: false
        }
      },
      {
        name: 'data await',
        value: {
          plugin: '@udock/vue-plugin-data--await',
          template: false
        }
      },
      {
        name: 'i18n',
        value: {
          plugin: '@udock/vue-plugin-i18n',
          template: false
        }
      },
      {
        name: 'debug',
        value: {
          plugin: '@udock/debug'
        }
      }
    ]
  }
]
