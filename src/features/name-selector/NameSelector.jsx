import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectName, setName } from './nameSelector.slice'

const NameSelector = () => {
  const [text, setText] = useState('')
  // redux
  const name = useSelector(selectName)
  const dispatch = useDispatch()

  const handler = (e) => {
    const v = e.target.value
    setText(v)
    dispatch(setName(v))
  }

  return (
    <>
      Demo
      <p>value from redux store: {name}</p>
      <input type='text' value={text} onChange={ handler }/>
    </>
  )}
export default NameSelector
