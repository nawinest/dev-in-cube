import { init } from '@rematch/core'
import * as model from './model'

const store = init({
  models:model,
})

export default store