import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './Nav'

function App() {
  const counter = useSelector(state => state.counter)
  const signedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  console.log(dispatch);
  return (
    <div className="App">
      <Nav />
      <h1>Counter: { counter }</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      {signedIn && <h1>Movie List</h1>}
    </div>
  )
}

export default App
