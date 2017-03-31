import { observable, action } from 'cans/mobx'

const modalStorePlugin = (app, options = {}) => {
  const names = options.names || []
  app.model({
    namespace: 'modals',
    observable: app => {
      const stateMap = {}
      names.forEach(name => {
        stateMap[name] = observable({
          visible: false,
          confirmLoading: false,

          show: action.bound(function () {
            this.visible = true
          }),

          hide: action.bound(function () {
            this.visible = false
          }),

          startLoading: action.bound(function () {
            this.confirmLoading = true
          }),

          stopLoading: action.bound(function () {
            this.confirmLoading = false
          })
        })
      })
      return stateMap
    }
  })
}
module.exports = modalStorePlugin
