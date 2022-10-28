import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const {state} = useLocation()
  console.log(state);
  return (
    <div>Home</div>
  )
}

export default Home