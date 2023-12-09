import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {

  return (
      <article className='flex flex-wrap justify-center gap-2'>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </article>
  )
}

export default Posts;

