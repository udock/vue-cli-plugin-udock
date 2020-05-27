"use strict";
var dependencieVersionMap = require('./dependencieVersionMap.json');
function resolvePackageJson(pluginName) {
    var deps = dependencieVersionMap[pluginName];
    return {
        dependencies: deps && deps.dependencies,
        devDependencies: deps && deps.devDependencies
    };
}
module.exports = function (api, options, rootOptions) {
    api.extendPackage({
        scripts: {
            'udock:setup': 'vue invoke @udock/udock'
        }
    });
    api.render('./templates/@udock/vue-bootstrap');
    for (var _i = 0, _a = options.plugins; _i < _a.length; _i++) {
        var config = _a[_i];
        var pluginName = config.plugin;
        options.plugins[pluginName] = true;
        api.extendPackage(resolvePackageJson(pluginName));
        if (config.template !== false) {
            api.render(options.template || "./templates/" + pluginName);
        }
    }
};
