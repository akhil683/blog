import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Navlinks from './Navlinks'; 

const Navbar = ({ posts, setSearchResults }) => {
  
  const [input, setInput ] = useState("");

  useEffect(() => {
    const filteredBlogs = posts.filter(post => post.title.toLowerCase().includes(input));
    setSearchResults(filteredBlogs);
  }, [input, posts]);

  return (
    <div className='flex justify-between bg-gray-800 px-4 py-2'>
      <Link to="/">
        <h1 className='text-center text-white text-2xl p-2'>My Blogs</h1>
      </Link>
      <div className='flex items-center gap-2'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder='Search Posts' 
            className='rounded-sm p-1'
            onChange={(e) => setInput(e.target.value.toLowerCase())}
          />
        </form>
      <Navlinks />
      </div>
    </div>
  )
}

export default Navbar;
