import { init } from '@rematch/core'
import * as model from './models/index'
import createRematchPersist from '@rematch/persist'
import createSelectPlugin from '@rematch/select'

const persistPlugin = createRematchPersist({
  whitelist: ['user'], // a model which keep
  throttle: 5000, // keep to localstorage every 5 sec.
  version: 1,
})

const selectPlugin  = createSelectPlugin()


const store = init({
  models: model,
  plugins: [persistPlugin,selectPlugin]
})

export default store