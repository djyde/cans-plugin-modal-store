const cans = require('cans')
const modalStorePlugin = require('../')
const assert = require('power-assert')

describe('modal store', () => {
  const app = cans.default()

  app.use(modalStorePlugin, { names: ['foo'] })

  it('should bind modals observable', done => {
    assert(app.models.modals.foo.visible === false)
    app.models.modals.foo.show()
    assert(app.models.modals.foo.visible === true)
    done()
  })
})