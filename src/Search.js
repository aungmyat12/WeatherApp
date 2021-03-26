import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      <input type="text"/>
      <h1>Hey {counter}</h1>
    </div>
  )
}

export default Search
