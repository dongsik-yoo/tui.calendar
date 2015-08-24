/**
 * @fileoverview Controller factory module.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Base = require('./base');
var Week = require('./viewMixin/week');
var mixins = {
    'Week': Week
};

/**
 * @param {string[]} mixinNames The array of mixin module names.
 * @param {Base} [ctrl] The controller instance to reuse. if not supplied then make new one.
 * @returns {Base} The controller instance.
 */
module.exports = function(mixinNames, ctrl) {
    mixinNames = mixinNames || [];

    ctrl = ctrl || new Base();

    util.forEach(mixinNames, function(name) {
        var target = ctrl[name] = {};

        util.forEach(mixins[name], function(method, methodName) {
            target[methodName] = util.bind(method, ctrl);
        });
    });

    return ctrl;
};

