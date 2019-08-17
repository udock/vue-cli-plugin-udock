"use strict";
var bootstrap = require('@udock/bootstrap');
module.exports = function (api, projectOptions) {
    api.chainWebpack(function (webpackConfig) {
        bootstrap(webpackConfig);
    });
};
