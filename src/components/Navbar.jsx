import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

import Navlinks from './Navlinks'; 

const Navbar = ({ posts, setSearchResults, width }) => {
  
  const [input, setInput ] = useState("");

  useEffect(() => {
    const filteredBlogs = posts.filter(post => post.title.toLowerCase().includes(input) || post.data.toLowerCase().includes(input));
    setSearchResults(filteredBlogs.reverse());
  }, [input, posts]);

  return (
    <div className='flex justify-between bg-gray-900 px-4 py-2'>
      <Link to="/">
        <h1 className='text-center text-green-300 text-2xl p-2'>My Blogs</h1>
      </Link>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt /> 
          : <FaLaptop />}
      <div className='flex items-center gap-2'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder='Search Posts' 
            className='rounded-sm p-1 outline-none focus:border-green-300 border-2 border-transparent'
            onChange={(e) => setInput(e.target.value.toLowerCase())}
          />
        </form>
      <Navlinks />
      </div>
    </div>
  )
}

export default Navbar;
