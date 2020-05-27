"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var prompts_1 = __importDefault(require("./prompts"));
var plugins = prompts_1.default.find(function (prompt) { return prompt.name === 'plugins'; });
var depsMap = {};
if (plugins) {
    for (var _i = 0, _b = plugins.choices; _i < _b.length; _i++) {
        var plugin = _b[_i];
        var pluginName = plugin.value.plugin.split('/')[1];
        var pkg = require("../" + pluginName + "/package.json");
        depsMap[pluginName] = {
            dependencies: pkg.peerDependencies,
            devDependencies: (_a = {},
                _a[pluginName] = "^" + pkg.version,
                _a)
        };
    }
}
fs_1.default.writeFileSync('./dependencieVersionMap.json', JSON.stringify(depsMap, null, 2));
