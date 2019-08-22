"use strict";
module.exports = [
    {
        type: 'checkbox',
        name: 'plugins',
        message: 'select plugins',
        choices: [
            {
                name: 'auto router',
                value: {
                    plugin: '@udock/vue-plugin-auto-router',
                    package: {
                        devDependencies: {
                            '@udock/vue-plugin-auto-router': '^0.1.0'
                        }
                    }
                },
                checked: true
            },
            {
                name: 'mock',
                value: {
                    plugin: '@udock/vue-plugin-mock',
                    package: {
                        dependencies: {
                            'axios': '^0.18.0'
                        },
                        devDependencies: {
                            '@udock/vue-plugin-mock': '^0.1.0'
                        }
                    }
                },
                checked: true
            },
            {
                name: 'element ui',
                value: {
                    plugin: '@udock/vue-plugin-element-ui',
                    package: {
                        dependencies: {
                            'element-ui': '^2.0.0'
                        },
                        devDependencies: {
                            '@udock/vue-plugin-element-ui': '^0.1.0'
                        }
                    },
                    template: false
                },
                checked: true
            },
            {
                name: 'data share',
                value: {
                    plugin: '@udock/vue-plugin-data--share',
                    package: {
                        devDependencies: {
                            '@udock/vue-plugin-data--share': '^0.1.0'
                        }
                    },
                    template: false
                }
            },
            {
                name: 'data vuex',
                value: {
                    plugin: '@udock/vue-plugin-data--vuex',
                    package: {
                        devDependencies: {
                            '@udock/vue-plugin-data--vuex': '^0.1.0'
                        }
                    },
                    template: false
                }
            },
            {
                name: 'debug',
                value: {
                    plugin: '@udock/debug',
                    package: {
                        devDependencies: {
                            '@udock/debug': '^0.1.0'
                        }
                    }
                }
            }
        ]
    }
];
