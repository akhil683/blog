import React from 'react';
import Posts from '../components/Posts';

const Home = ({ filteredBlogs }) => {
  return (
    <div>
     <h2 className='p-6 text-center text-3xl font-sans'>Latest Posts</h2>
     {filteredBlogs.length 
      ? <Posts posts={filteredBlogs} />
      : <p className='text-center p-6 text-xl text-gray-600'>No blog post found</p>}
    </div>
  )
}

export default Home
