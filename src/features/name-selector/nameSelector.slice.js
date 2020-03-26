import {createSlice} from '@reduxjs/toolkit'
import {increment} from '../counter/counterSlice'

const slice = createSlice({
  name: 'nameStore',
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
  },
  initialState: {
    name: '-'
  },
  // extra defined as strings
  extraReducers: {
    [increment]: (state, action) => {
      // trigger a reducer from an action of another store...
      console.log(increment)
      state.name = "counter.increment called from name-selector"
    }
  }
  // extra defined with builder
  // extraReducers: (builder) => {
  //   builder.addCase(increment, (state, action)=> {
  //     state.name = 'increment from builder'
  //   })
  // }
})


// reducer
export const nameReducer = slice.reducer
// selector
export const selectName = state=> state.name.name
// actions
export const setName = slice.actions.setName
