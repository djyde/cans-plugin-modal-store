'use strict';

var cans_mobx = require('cans/mobx');

var modalStorePlugin = function (app, options) {
  if ( options === void 0 ) options = {};

  var names = options.names || [];
  app.model({
    namespace: 'modals',
    observable: function (app) {
      var stateMap = {};
      names.forEach(function (name) {
        stateMap[name] = cans_mobx.observable({
          visible: false,
          confirmLoading: false,

          show: cans_mobx.action.bound(function () {
            this.visible = true;
          }),

          hide: cans_mobx.action.bound(function () {
            this.visible = false;
          }),

          startLoading: cans_mobx.action.bound(function () {
            this.confirmLoading = true;
          }),

          stopLoading: cans_mobx.action.bound(function () {
            this.confirmLoading = false;
          })
        });
      });
      return stateMap
    }
  });
};
module.exports = modalStorePlugin;
