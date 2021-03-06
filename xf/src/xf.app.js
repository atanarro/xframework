define([
    './xf.core',
    'underscore',
    'backbone',
    './xf.settings'
], function(XF, _, BB) {

XF.App = function(options) {
    options = options || {};
    options.device = options.device || {};

    this.initialize = options.initialize || this.initialize;

    // options.settings
    _.extend(XF.settings, options.settings);

    this.initialize();

    XF.start(options);
};


_.extend(XF.App.prototype, XF.Events);

_.extend(XF.App.prototype, /** @lends XF.App.prototype */{
    initialize: function () {


    }
});

/**
 This method allows to extend XF.App with saving the whole prototype chain
 @function
 @static
 */
XF.App.extend = BB.Model.extend;

    return XF;
});
