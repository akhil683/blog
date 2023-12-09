import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
      
    <ul className='sm:flex text-white gap-4 hidden'>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/newpost">
        <li>Post</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>       
  )
}

export default Navlinks
