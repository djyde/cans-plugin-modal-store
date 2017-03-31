# cans-plugin-modal-store

[![npm](https://img.shields.io/npm/v/cans-plugin-modal-store.svg)](https://www.npmjs.com/package/cans-plugin-modal-store)
[![circle](https://circleci.com/gh/djyde/cans-plugin-modal-store.svg?style=shield)](https://circleci.com/gh/djyde/cans-plugin-modal-store)

cans plugin for creating modal store.

## Usage

```js
import cans, { inject } from 'cans'
import modalStorePlugin from 'cans-plugin-modal-store'
import Modal from '/path/to/Modal'

const app = cans()

app.use(modalStorePlugin, { names: ['user'] })

const UserModal = inject(({ models }) => {
  return (
    <Modal visible={models.modals.user.visible}>
      <div>Modal body</div>
      <button onClick={models.modals.user.hide}>Hide Modal</button>
    </Modal>
  )
})

const App = inject(({ models }) => {
  return (
    <div>
      <button onClick={models.modals.user.show}>Show Modal</button>
      <UserModal />
    </div>
  )
})
```

### options

- names: string[] - Array of name

### observable property

- visible: boolean.
- confirmLoading: boolean. Loading status.
- startLoading(): set `confirmLoading` to true
- stopLoading(): set `confirmLoading` to false
- show(): set `visible` to true
- hide(): set `visible` to false

# License

MIT License