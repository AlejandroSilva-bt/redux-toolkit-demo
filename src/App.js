import React from 'react'
import { Counter } from './features/counter/Counter'
import NameSelector from './features/name-selector/NameSelector'

const App = () => {
  return (
    <div className="App">
      <Counter />
      <NameSelector />
    </div>
  )
}

export default App
