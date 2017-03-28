import { observable, action } from 'cans/mobx'

const modalStorePlugin = (names) => {
  return {
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
      // TODO: cannot set models directory
      app.models.modals = stateMap
      return stateMap
    }
  }
}

module.exports = modalStorePlugin
