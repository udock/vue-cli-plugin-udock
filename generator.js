"use strict";
var dependencieVersionMap = require('./dependencieVersionMap.json');
function resolvePackageJson(pkg, pluginName) {
    pkg = pkg || {};
    var deps = dependencieVersionMap[pluginName];
    Object.assign(pkg.dependencies, deps.dependencies);
    Object.assign(pkg.devDependencies, deps.devDependencies);
    return pkg;
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
        if (config.package) {
            api.extendPackage(resolvePackageJson(config.package, pluginName));
        }
        if (config.template !== false) {
            api.render(options.template || "./templates/" + pluginName);
        }
    }
};
