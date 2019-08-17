"use strict";
module.exports = function (api, options, rootOptions) {
    var _a;
    console.log(options);
    api.extendPackage({
        scripts: {
            'udock:setup': 'vue invoke @udock/udock'
        },
        devDependencies: {
            '@udock/vue-bootstrap': '^0.0.2'
        }
    });
    api.render('./template');
    for (var _i = 0, _b = options.plugins; _i < _b.length; _i++) {
        var plugin = _b[_i];
        var _c = plugin.split('#'), pluginName = _c[0], pluginVersion = _c[1];
        options.plugins[pluginName] = true;
        api.extendPackage({
            devDependencies: (_a = {},
                _a["@udock/" + pluginName] = pluginVersion,
                _a)
        });
        api.render("./template-" + pluginName);
    }
};
