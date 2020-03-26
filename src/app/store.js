import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { nameReducer } from '../features/name-selector/nameSelector.slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer
  },
  // preloadedState: {
  //   counter: {
  //     value: 12
  //   }
  // }
})
