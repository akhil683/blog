import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
      
    <ul className='sm:flex text-white gap-4 hidden'>
      <Link to="/">
        <li className='hover:text-green-300 duration-200'>Home</li>
      </Link>

      <Link to="/newpost">
        <li className='hover:text-green-300 duration-200'>Post</li>
      </Link>

      <Link to="/about">
        <li className='hover:text-green-300 duration-200'>About</li>
      </Link>
    </ul>       
  )
}

export default Navlinks
