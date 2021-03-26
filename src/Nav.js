import React from 'react'
import { useDispatch } from 'react-redux'
import Search from './Search'

const Nav = () => {
  const dispatch = useDispatch()
  return (
    <nav>
      <h3 onClick={() => dispatch({ type: "SIGN_IN" })}>Nav</h3>
      <Search />
    </nav>
  )
}

export default Nav
