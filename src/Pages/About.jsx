import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const {id} = useParams();
  return (
    <>
       <div>About</div>
    <div>{id && id}</div>
    </>
 

  )
}

export default About